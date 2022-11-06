import React, { Component } from 'react';
import Header from '../Common/Header';
import axios from 'axios';
export default class AdminRegister extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email:'',
      password:'',
      confirmPass:''

    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  create()
    {
        let url="http://localhost:50450/api/Admin";
        axios.post(url,{
          email:this.state.email,
          password:this.state.password,
          confirmPass:this.state.confirmPass,
          
        }).then(response=>{
            alert(response.data);

        }).catch(error=>{
            alert(error);
        });
      }
      handleChange(object)
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
                <h3>Register Here:</h3>
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">Email</label>
                <input type="email" name="email" onChange={(e)=>this.handleChange({email:e.target.value})} className="form-control"></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Password</label>
                <input type="password" name="password" onChange={(e)=>this.handleChange({password:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Comfirm Password</label>
                <input type="password" name="confirmPass" onChange={(e)=>this.handleChange({confirmPass:e.target.value})} className="form-control"></input>
                
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