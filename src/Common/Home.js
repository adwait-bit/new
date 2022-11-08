import Header from '../Common/Header';
import React, { Component } from 'react'
import '../Common/Home.css';
import user from '../Common/user.png';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
        <><Header></Header>
        <h1>Welcome to Policy Management System</h1>
          <div className='home'></div>
          <footer>
        <Footer></Footer>
        </footer>
        </>
    )
  }
}
