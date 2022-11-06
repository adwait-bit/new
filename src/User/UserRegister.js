import React, { Component } from 'react';
import Header from '../Common/Header';
import '../Admin/Admin.css';
import axios from 'axios';
export default class UserRegister extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
      fname:'',
      lname:'',
       dob:'',
       address:'',
       contactNo:'',
       email:'',
       password:'',
       cPassword:'',
       salary:0,
       panNo:'',
       employerType:'',
       employer:''

    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  create()
    {
        let a = parseFloat(this.state.salary);
       // var a=this.state.salary;
      console.log(this.state.salary);
    //  http://localhost:50450/api/User
        let url="http://localhost:50450/api/User";
        axios.post(url,{
          // "fname": "abc",
  // "lname": "d",
  // "dob": "2022-11-03T12:17:00.730Z",
  // "address": "del",
  // "contactNo": "4522",
  // "email": "wado@gmail.com",
  // "password": "abc",
  // "cPassword": "abc",
  //  "salary": 1220,
  // "panNo": "skd1",
  // "employerType": "s",
  // "employer": "sdd",
          fname:this.state.fname,
          lname:this.state.lname,
          dob:this.state.dob,
          address:this.state.address,
          contactNo:this.state.contactNo,
          email:this.state.email,
          password:this.state.password,
          cPassword:this.state.cPassword,
          salary:a,
          panNo:this.state.panNo,
          employerType:this.state.employerType,
          employer:this.state.employer
          //salary
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
            
              <div className="text-center mb-3">
                <hr></hr>
                <h3>Register Here:</h3>
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">First Name</label>
                <input type="text" name="fname" onChange={(e)=>this.handleChange({fname:e.target.value})} className="form-control"></input>
                
              </div>


              <div className="form-outline mb-4">
              <label className="form-label">Last Name</label>
                <input type="text" name="lname" onChange={(e)=>this.handleChange({lname:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Date of birth</label>
                <input type="date" name="dob" onChange={(e)=>this.handleChange({dob:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Address</label>
                <input type="text" name="address" onChange={(e)=>this.handleChange({address:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Contact Number</label>
                <input type="text" name="contactNo" onChange={(e)=>this.handleChange({contactNo:e.target.value})} className="form-control" ></input>
                
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
              <label className="form-label">Confirm Password</label>
                <input type="password" name="cPassword" onChange={(e)=>this.handleChange({cPassword:e.target.value})} className="form-control" ></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Salary</label>
                {/* <input type="text" name="salary" onChange={(e)=>this.handleChange({salary:e.target.value})} className="form-control"></input> */}
                <input type="text" name="salary" onChange={(e)=>this.handleChange({salary:e.target.value})} className="form-control" ></input>
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">PAN Number</label>
                <input type="text" name="panNo" onChange={(e)=>this.handleChange({panNo:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Employer Type</label>
                <input type="text" name="employerType" onChange={(e)=>this.handleChange({employerType:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Employer</label>
                <input type="text" id="employer" onChange={(e)=>this.handleChange({employer:e.target.value})} className="form-control"></input>
                
              </div>
              <br></br>

              <button type='button' onClick={this.create} className="btn btn-primary btn-block mb-3">Register</button>
            
          </div>
        {/* </div> */}
        </>
    )
  }
}