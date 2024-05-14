import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyComponent from './testProxy';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function FocusData() {

  const [divs, setDivs] = useState([]); // 使用狀態來儲存動態的 div 區塊

  const [show, setShow] = useState(false);

  const cloesMCUView = () => setShow(false);
  const openMCUView = () => setShow(true);

  const handleAddDiv = () => {
    // 新增一個動態的 div，並將其加入到 divs 狀態中
    setDivs([...divs, <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">資料來源</text></svg>
      <div className="card-body">
        <p className="card-text">資料的簡單說明</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" variant="primary" onClick={openMCUView} className="btn btn-sm btn-outline-secondary">查看資料</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">編輯資料</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">刪除資料</button>
          </div>
          <small className="text-body-secondary">未保存</small>
        </div>
      </div>
    </div>

  </div>]);
  };



  return (
    <div>
      <div className="container overflow-auto" style={{width: 75 + '%', height: 75 + 'vh'}}>
        <div>
          <button onClick={handleAddDiv}>Add Div</button>

          {/*openMCUView的視窗 */}
          <Modal
            show={show}
            onHide={cloesMCUView}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>詳細資料</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              各項的資料
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>傳送的資料帳號名稱 :</Form.Label>
                  <Form.Label>從資料庫得到的帳號名稱</Form.Label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>已得到的資料</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cloesMCUView}>
                關閉
              </Button>
            </Modal.Footer>
          </Modal>

          <MyComponent />  {/*這會自動呼叫放在另一個檔案的function */}
          <a className="link-secondary" href="#" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
          </a>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* 渲染動態的 div 區塊列表 */}
          {divs.map((div, index) => (
            <div key={index}>{div}</div>
          ))}
          
        </div>
      </div>
    </div>
  )
}