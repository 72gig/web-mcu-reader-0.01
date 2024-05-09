using System.Text;
using MQTTnet;
using MQTTnet.Server;
using static System.Console;
using Npgsql;


// 開啟 postgresql server, 保存資料
// 設定變數， 使用時需要可再修改
var myServer = "";
var userName = "";
var password = "";
var dataBase = "";

// 建立字串
string[] array = {"Host=", myServer, ";Username=", userName,
                  ";Password=", password, ";Database=", dataBase};

// 用join把字串連接起來
var connString = String.Join("",array);

// 連線需要使用的程式碼
var dataSourceBuilder = new NpgsqlDataSourceBuilder(connString);
var dataSource = dataSourceBuilder.Build();

// 如果登入的資料錯誤 會在這裡出現錯誤
var conn = await dataSource.OpenConnectionAsync();

WriteLine("連線 Postgresql 資料庫");

// 客戶端ID列表
List<string> clientIDlist = new List<string>();
// 客戶端帳號列表
List<string> userNamelist = new List<string>();
// 客戶端密碼列表
List<string> passwordlist = new List<string>();

// 如果沒有, 建立保存資料的資料表
await using (var cmd = new NpgsqlCommand(
    @"create table if not exists mqtt_table (
        Key_id serial primary key,
        Topic text not null,
        Payload text not null);", conn)){
    await cmd.ExecuteNonQueryAsync();
}


// 預設有五個連線, Port 預設1883
var options = new MqttServerOptionsBuilder().WithDefaultEndpoint().WithConnectionBacklog(5);

// 建立Mqtt
var server = new MqttFactory().CreateMqttServer(options.Build());
//Add Interceptor for logging incoming messages
server.InterceptingPublishAsync += Server_InterceptingPublishAsync;  //接收到消息
server.ClientConnectedAsync += Server_GetConnectedClient;  // 有客戶端連接進來
server.ValidatingConnectionAsync += Server_ValidateConnection;  // 驗證客戶端

WriteLine("開啟MQTT");
// 開啟MQTT
await server.StartAsync();

Task Server_GetConnectedClient(ClientConnectedEventArgs arg)
{
    Console.WriteLine("get connected client");
    return Task.CompletedTask;
}

Task Server_InterceptingPublishAsync(InterceptingPublishEventArgs arg)
{
    WriteLine("run task message");
    // Convert Payload to string
    var payload = arg.ApplicationMessage?.Payload == null ? null : Encoding.UTF8.GetString(arg.ApplicationMessage?.Payload);


    WriteLine(
        " TimeStamp: {0} -- Message: ClientId = {1}, Topic = {2}, Payload = {3}, QoS = {4}, Retain-Flag = {5}",
        DateTime.Now,
        arg.ClientId,
        arg.ApplicationMessage?.Topic,
        payload,
        arg.ApplicationMessage?.QualityOfServiceLevel,
        arg.ApplicationMessage?.Retain);


    // 寫資料到 Postgresql
    using (var cmd = new NpgsqlCommand("insert into mqtt_table (Topic, Payload) values (@t,@p)", conn)){

        cmd.Parameters.AddWithValue("t", arg.ApplicationMessage?.Topic);
        cmd.Parameters.AddWithValue("p", arg.ApplicationMessage?.Payload);
        cmd.ExecuteNonQuery();
    }

    return Task.CompletedTask;
}

Task Server_ValidateConnection(ValidatingConnectionEventArgs Args)
{
    if (Args.ClientId == "UNIQUE_RPI_PICO_ID_1")
    {
        // 用戶名和密碼驗證
        // 大部分情況下，我們應該使用客戶端加密 token 驗證，也就是可客戶端 ID 對應的密鑰加密後的 token
        if (Args.Username != "RPI_PICO_USERNAME_1" || Args.Password != "RPI_PICO_PASSWORD_1")
        {
            // 驗證失敗，告訴客戶端，鑑權失敗
            Args.ReasonCode = MQTTnet.Protocol.MqttConnectReasonCode.BadUserNameOrPassword;
        }
    }
    else
    {
        Args.ReasonCode = MQTTnet.Protocol.MqttConnectReasonCode.ClientIdentifierNotValid;
    }
    return Task.CompletedTask;
}


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

var app = builder.Build();
app.UseRouting();
//app.MapGet("/", () => "Hello World!");

app.MapControllers();
app.UseStaticFiles();

app.Run();
