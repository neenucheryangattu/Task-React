import React from 'react'
import {Header} from "./style"
import { SearchOutlined,ShoppingCartOutlined,CaretDownOutlined } from "@ant-design/icons"
function Headersection() {
  return (
    <Header>
     <div className="header-topbar">
      <div className='header-container'>
      <h1>Alba Helpline : 04829 222776</h1>
      <div>
       <ul>
        <li>Register</li>
        <li>Login</li>
       </ul>
      </div>
      </div>
    
     </div>
      <div className='header-bottombar'>
      <div className='header-containers'>
        <div>
        <h1>Logo</h1>
        </div>
       <div>
        <ul>
          <li>Home</li>
          <li>Men
        <CaretDownOutlined />
          </li>
          <li>Women
        <CaretDownOutlined />
          </li>
          <li>Girls
        <CaretDownOutlined />
          </li>
          <li>Boys
        <CaretDownOutlined />
          </li>
        </ul>
       </div>
      <div>
  <ul>
    <li>  <SearchOutlined /></li>
    <li><ShoppingCartOutlined /></li>
  </ul>
      </div>
      </div>
      </div>
    </Header>
  )
}

export default Headersection