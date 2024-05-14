"# web-mcu-reader-0.01" 

#### 還未完成，作為記錄上傳

目標是可以在開啟網頁後查看先前己登錄的、使用MQTT傳送的感測器資料

### 0.02更新

將資料庫參數改為讀取外部的txt檔

可以通過在 dotnet-create-mqtt-web 資料夾建立 password.txt

並在內部輸入下列資訊

```
myServer = "xxx.xxx.xxx.xxx"  //your database server IP
userName = "xxxxx"   //your database user name
password = "xxxxx"  //your database user password
dataBase = "xxxxx"  //your database name
```

### 事前準備

安裝 .net 8.0 版，並安裝mqttnet與npgsql

可參考下列程式碼

```
dotnet add package MQTTnet --version 4.3.3.952
dotnet add package Npgsql --version 8.0.3
```
