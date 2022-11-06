import React, { Component } from 'react';
import Header from '../Common/Header';
import '../Admin/Admin.css';
import axios from 'axios';
export default class RegisterPolicy extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
      policyId:'',
      policyName:'',
      startDate:'',
       duration:'',
       companyName:'',
       initialDeposite:'',
       policyType:'',
       userTypes:'',
       term:'',
       termAmount:'',
       interest:'',
       maturityAmount:'',
       endDate:''
    

    }
    this.create=this.create.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  create()
    {
      console.log(this.state);
        let url="http://localhost:50450/api/Policy";
        axios.post(url,{
  // "policyid": "3",
  // "policyname": "jeevanvima",
  // "startdate": "2022-11-03T12:17:00.730Z",
  // "duration": "10",
  // "companyName": "lic",
  // "initialdeposite": "10000",
  // "policytype": "A",
  // "usertype": "employee",
  // "interest": "5",
 // "maturityAmount":"10000",
  //"endDate": "2022-11-03T12:17:00.730Z",

  policyId:this.state.policyId,
  policyName:this.state.policyName,
  "startDate":"2022-11-03T12:17:00.730Z",
  duration:this.state.duration,
  companyName:this.state.companyName,
  initialDeposit:this.state.initialDeposit,
  policyType:this.state.policyType,
  userTypes:this.state.userTypes,
  term:this.state.term,
  termAmount:this.state.termAmount,
  interest:this.state.interest,
  maturityAmount:this.state.maturityAmount,
  endDate:this.state.endDate


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
                <h3>Register New Policy Here:</h3>
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Policy Id</label>
                <input type="int" name="policyId" onChange={(e)=>this.handleChange({policyId:e.target.value})} className="form-control"></input>
                
              </div>
              
              <div className="form-outline mb-4">
              <label className="form-label">Policy Name</label>
                <input type="text" name="policyName" onChange={(e)=>this.handleChange({policyName:e.target.value})} className="form-control"></input>
                
              </div>


              <div className="form-outline mb-4">
              <label className="form-label">Start Date</label>
                <input type="date" name="startDate" onChange={(e)=>this.handleChange({startDate:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Duration(in years)</label>
                <input type="int" name="duration" onChange={(e)=>this.handleChange({duration:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Company Name</label>
                <input type="text" name="companyName" onChange={(e)=>this.handleChange({companyName:e.target.value})} className="form-control" ></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Intial deposite amount(in rupees)</label>
                <input type="int" name="initialDeposit" onChange={(e)=>this.handleChange({initialDeposit:e.target.value})} className="form-control" ></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Policy type</label>
                <input type="text" name="policyType" onChange={(e)=>this.handleChange({policyType:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">User Type</label>
                <input type="text" name="userTypes" onChange={(e)=>this.handleChange({userTypes:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Term</label>
                <input type="text" name="term" onChange={(e)=>this.handleChange({term:e.target.value})} className="form-control"></input>
                
              </div>
              <div className="form-outline mb-4">
              <label className="form-label">Term Amount</label>
                <input type="text" name="termAmount" onChange={(e)=>this.handleChange({termAmount:e.target.value})} className="form-control"></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Interest (in %)</label>
                <input type="int" name="interest" onChange={(e)=>this.handleChange({interest:e.target.value})} className="form-control"></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">Maturity Amount </label>
                <input type="int" name="maturityAmount" onChange={(e)=>this.handleChange({maturityAmount:e.target.value})} className="form-control" ></input>
                
              </div>

              <div className="form-outline mb-4">
              <label className="form-label">End Date</label>
                <input type="date" name="endDate" onChange={(e)=>this.handleChange({endDate:e.target.value})} className="form-control"></input>
                
              </div>
              <br></br>

              <button type='button' onClick={this.create} className="btn btn-primary btn-block mb-3">Register</button>
            
          </div>
        {/* </div> */}
        </>
    )
  }
}