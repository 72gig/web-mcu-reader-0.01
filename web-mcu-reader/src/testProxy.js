import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // 發送 GET 請求
    fetch('/api/return_index')
      .then(response => {
        // 檢查響應的狀態碼
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // 將響應轉換為 JSON
        return response.json();
      })
      .then(data => {
        // 成功獲取數據後的處理
        console.log(data);
      })
      .catch(error => {
        // 處理錯誤
        console.log('Error:' + error);
      });
  }

  render() {
    return (
      <div>
        <p>這是來自測試連線的資料</p>
      </div>
    );
  }
}

export default MyComponent;
