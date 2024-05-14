import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


export default function MainPage() {
  return (
    <div>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">您好</h3>
            {/*
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
              <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
              <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
            </nav>
             */}
          </div>
        </header>
      
        <main class="px-3">
          <h1>歡迎使用MCU檢測系統</h1>
          <p class="lead">您可以在MCU檢測系統上使用以下功能:</p>
          <h4>
            MCU資料確認
          </h4>
          <p>
            您可以登錄需要定時檢查的MCU，通過MCU回傳的資料取得即時的狀態
          </p>
          <h4>
            即時訊息
          </h4>
          <p>
             您可以跟同時在線的成員進行即時的交流
          </p>
          <h4>
            詳細資料
          </h4>
          <p>
             您可以在這個地方查到MQTT得到的所有資料
          </p>
          <h4>
            圖表
          </h4>
          <p>
             您可以查看以圖表顯示、更容易閱讀的資料
          </p>
        </main>
      
        <footer class="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
        </footer>
      </div>
    </div>
  )
}