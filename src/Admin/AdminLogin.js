import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
export default class AdminLogin extends Component {
  render() {
    return (
      <><div>
        <Header></Header>
        <hr></hr>

        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true">Login</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="AdminRegister.js" role="tab"
              aria-controls="pills-register" aria-selected="false">Register</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>

              <p class="text-center">Log In</p>


              <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Email or username</label>
              </div>


              <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Password</label>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


              <div class="text-center">
                <p>Not a member?<a href="#!">Register</a></p>
              </div>
            </form>
          </div>

        </div>

      </div>
      {/* <footer>
      <Footer></Footer>
      </footer> */}
      
      
      </>
    )
  }
}
