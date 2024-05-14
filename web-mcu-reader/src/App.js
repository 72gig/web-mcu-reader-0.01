import MainPage from './MainPage';
import Detail from './Detail';
import FocusData from './FocusData';
import Chat from './Chat';
import Image from './Image';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './blog.css';
import './cover.css';

function App() {
  return (
    <div style={{height: 100 + 'vh'}}>

    <BrowserRouter>
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="/">主頁面</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">MCU檢測系統</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary" href="#">登入</a>
            </div>
          </div>
        </header>
      
        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <a className="nav-item nav-link link-body-emphasis" href="/FocusData">MCU資料確認</a>
            <a className="nav-item nav-link link-body-emphasis" href="/Chat">即時匿名記錄</a>
            <a className="nav-item nav-link link-body-emphasis" href="/Detail">詳細資料</a>
            <a className="nav-item nav-link link-body-emphasis" href="/Image">圖表</a>
            {/*
            <a className="nav-item nav-link link-body-emphasis" href="#">Culture</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Business</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Politics</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Science</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Health</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Style</a>
            <a className="nav-item nav-link link-body-emphasis" href="#">Travel</a>
            */}
          </nav>
        </div>
      </div>

      <Routes>
          {/*
          <Route path="/setting_page" element={<SettingPage/>}/>
          <Route path='*' element="<p>找不到頁面</p>"/>
           */}
          <Route path='/' element={<MainPage/>} />
          <Route path='/FocusData' element={<FocusData/>} />
          <Route path='/Chat' element={<Chat/>} />
          <Route path='/Detail' element={<Detail/>} />
          <Route path='/Image' element={<Image/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
