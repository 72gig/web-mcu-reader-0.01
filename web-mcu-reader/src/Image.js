import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


export default function Image() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div>

        </div>
        <div className='flex-column position-relative' style={{width: 75 + '%', height: 75 + 'vh'}}>
          <div style={{height: 93 + '%'}}>
              <div className='border overflow-auto h-100 w-auto'>
                <p>Image</p>
              </div>
            </div>
          </div>
        <div>

        </div>
      </div>

    </div>
  )
}