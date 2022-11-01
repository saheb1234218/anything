import React, { useState } from 'react'
import logo from "../../../../assets/new/heyjobs logo.png"
import "./Common.css";
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Company(props) {

    const [sel,setSel]=useState(false);
    const [comp,setComp]=useState("");
    const [type,setType]=useState("");
    const [web,setWeb]=useState("");
    const { signup } = useAuth();
    const navigate = useNavigate()


const submit=async()=>{
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var pass = localStorage.getItem('pass');
    var phone = localStorage.getItem('phone');

    const obj={
        "name": name,
        "phone":phone,
        "companyType": type,
        "companyName":comp,
        "website": web,
        "type": "2",
        "email": email,
        "password": pass
    }
    console.log(obj);
    const x=await signup(obj);
  console.log(x.data,x);
  if(x.data===undefined)
  {
    alert(`${x.error}`)
  }
  navigate("/dashboard/setting");

}

  return (
    <div  className='container  d-flex justify-content-center'>

<div id="info" class="card w-75 shadow" >
  
  <div   class="card-body  p-2 shadow flex-column align-items-center d-flex justify-content-center">
    <img src={logo} className="shadow p-2 image" style={{width:'20%',borderRadius:'12px'}}></img>
    <h5 class="card-title mt-3 " style={{fontWeight:'bold'}}>Whom are you hiring for?</h5>
    <p class="card-text">Choose any option below</p>
    <div class="form-check shadow w-75 pt-3 pb-3 mb-3" style={{border:'1px solid rgb(223, 225, 230)',paddingLeft:'60px'}}>
  <input class="form-check-input mr-5" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label d-flex flex-column"  for="flexRadioDefault2">
    <h5>My Own Company</h5>
    <small>I’m an owner/employee of a business or a company/enterprise</small>
  </label>
</div>
<div class="form-check  w-75 pt-3 pb-3 mb-3 shadow" style={{border:'1px solid rgb(223, 225, 230)',paddingLeft:'60px'}}>
  <input class="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label d-flex flex-column"  for="flexRadioDefault2">
    <h5>My clients</h5>
    <small>I’m a consultant working for staffing or manpower consultancy.</small>
  </label>
</div>
    
    
    <input class="form-control comp form-control-lg w-sm-75 w-100 mt-3 shadow" type="text" placeholder="Clients you normally hire for " aria-label=".form-control-lg example"/>
  <input class="form-control comp form-control-lg w-sm-75 w-100 mt-3 shadow" type="text" placeholder="Your Company Name" aria-label=".form-control-lg example"/>
  <input class="form-control comp form-control-lg w-sm-75 w-100 mt-3 shadow" type="text" placeholder="Your Company Website" aria-label=".form-control-lg example"/>
  <a onClick={submit} style={{height:'45px',fontSize:'19px',backgroundColor:'rgb(43, 183, 147)',border:'none'}} class="mb-2 btn text-light  btn-primary w-75 mt-4">Continue</a>
  </div>
  
  
</div>
    </div>
  )
}
