import React, { Component } from 'react'
import Header from '../Common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default class Login extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:''
      }
      this.submit=this.submit.bind(this);
      this.handlechange=this.handlechange.bind(this);
    }
    submit()
    {
        let url="http://localhost:50450/api/User/Userlogin";
          //let url="http://localhost:50450/api/User/Userlogin?emailid=this.state.emailid&password=this.state.password"
        axios.post(url,{
            email:this.state.email,
           //" emailid":"a@gmail.com",
            password:this.state.password
           //"password":"111"
        //   }).then(response=>{console.log("Login Successful ")})
        // .catch(error=>{alert("Error")});


       }).then(response=>{
            if(response.data.email!=null)
            {
           alert(response.data.email);
            sessionStorage.setItem("emailid",response.data.email);
           // window.location="/Inbox";
            }
            else
            {
                alert("Username/password is Invalid");
            }
       }).catch(error=>{
            alert(error);
        });
    }
    handlechange(object)
    {
        this.setState(object);
   }
  render() {
    return (
       <><header>
<Header></Header>
      </header><div>

          {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register"> */}
            <form>
              <div class="text-center mb-3">
                <hr></hr>
                <h3>Login Here:</h3>
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">Email</label>
                <input type="email" name="email" onChange={(e)=>this.handleChange({email:e.target.value})} className="form-control"></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Password</label>
                <input type="password" name="password" onChange={(e)=>this.handleChange({password:e.target.value})} className="form-control"></input>
                
              </div>
              

              <br></br>

              <button type='button' onClick={this.create} className="btn btn-primary btn-block mb-3">Register</button>
            </form>
          </div>
        {/* </div> */}
        </>
    )
  }
}