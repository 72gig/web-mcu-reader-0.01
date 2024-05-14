import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


export default function Chat() {

  
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='border'>
        </div>
        <div className='flex-column position-relative' style={{width: 75 + '%', height: 75 + 'vh'}}>
          <div style={{height: 93 + '%'}}>
            <div className='border overflow-auto h-100 w-auto'>
              <p>chat</p>
            </div>
          </div>
          <div className='position-absolute bottom-0 start-0 border w-100 container'>
            <div className='row'>
              <div className='border col-10'>
                underline
              </div>
              <div className='border col-2'>button</div>
            </div>
          </div>
        </div>
        <div className='border'>
        </div>
      </div>
      <p>Chat</p>

    </div>
  )
}