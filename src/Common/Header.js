import React, { Component } from 'react'
import '../Common/Header.css';
export default class Header extends Component {
  render() {
    return (
      <div>
<nav className='navbar'>
    <div className='heading'>
        <h5>POLICY MANAGEMENT SYSTEM</h5>
    </div>
    <div className='nav'>
        <ul>
            <li><a href='#'>HOME</a></li>
            <li><a href='#'>ADMIN</a></li>
            <li><a href='#'>USER</a></li>
        </ul>
    </div>
</nav>

      </div>
    )
  }
}
