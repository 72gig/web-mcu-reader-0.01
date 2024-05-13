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
password = "passPost11SQL"  //your database user password
dataBase = "postgres"  //your database name
```