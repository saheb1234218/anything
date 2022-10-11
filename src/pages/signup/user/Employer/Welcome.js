import React, { useState } from 'react'
import logo from "../../../../assets/new/heyjobs logo.png"
export default function Welcome(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  return (
    <div className='container vertical-scrollable d-flex justify-content-center'>

<div class="card w-75 " >
  
  <div  class="card-body  p-5 shadow flex-column align-items-center d-flex justify-content-center">
    <img src={logo} className="shadow p-2" style={{width:'25%',borderRadius:'12px'}}></img>
    <h5 class="card-title mt-3 " style={{fontWeight:'bold'}}>Welcome!</h5>
    <p class="card-text">Since this is your first job posting, let's setup your company account.</p>
    <input onChange={(e)=>setName(e.target.value)} class="form-control form-control-lg w-sm-75 w-100  mt-2 shadow" type="text" placeholder="What is your full name? " aria-label=".form-control-lg example"/>
    <input onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg w-sm-75 w-100 mt-2 shadow" type="email" placeholder="Add your email " aria-label=".form-control-lg example"/>
    <input onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg w-sm-75 w-100 mt-2 shadow" type="password" placeholder="Add your password " aria-label=".form-control-lg example"/>

    <a onClick={()=>{
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("pass",password);
        props.next()
        }} style={{height:'45px',fontSize:'19px',backgroundColor:'rgb(43, 183, 147)',border:'none'}} class="btn text-light  btn-primary w-75 mt-4">Continue</a>
    
  </div>
  
</div>
    </div>
  )
}
