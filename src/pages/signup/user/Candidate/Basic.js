import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import "./common.css";



export default function Basic(props) {
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [box,setBox]=useState(false)

  const submit=()=>{
    const obj={
      "name": name,
      "experience": exp,
      "phone":phone,
      "email": email,
      "password":pass
    }
    localStorage.setItem("basic",JSON.stringify(obj));
    props.next();
  }

    return (
        <>
            <div className='container w-75 mt-4'>
                <h2>Find a job & grow your career</h2>
            <div class="mb-3 mt-4">
  <label for="formGroupExampleInput" class="label">Full Name</label>
  <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="What is your name?"/>
    
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="label">Email Id</label>
  <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="formGroupExampleInput2" placeholder="Tell us your Email ID"/>
  <small>We'll send you relevant jobs in your mail</small>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="label">Password</label>
  <input type="password" onChange={(e)=>setPass(e.target.value)} class="form-control" id="formGroupExampleInput2" placeholder="Create a password for your account"/>
  <small>Minimum 6 characters required</small>
</div>
<div class="mb-3">
    <label class="label" for="autoSizingInputGroup">Mobile Number</label>
    <div class="input-group">
      <div class="input-group-text">+91</div>
      <input type="tel" onChange={(e)=>setPhone(e.target.value)} class="form-control" id="autoSizingInputGroup" placeholder="Mobile Number"/>
    </div>
    <small>Recruiters will call you on this number</small>
  </div>
      


  <div class="row ">
  <label class="label" for="autoSizingInputGroup">Work Status</label>
  <div class="col-sm-6" onClick={()=>{
    setBox(true);
    setExp("experienced")}}>
    <div class="card" style={{backgroundColor:`${box && exp==="experienced"?'#ececec':'white'}`,cursor:'pointer'}}>
      <div class="card-body">
        <h5 class="card-title" style={{color:'#457eff'}}>I'm Experienced</h5>
        <p class="card-text">I have work experience (excluding internships)</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6 mb-3"  onClick={()=>{
    setBox(true);
    setExp("fresher")}}>
    <div class="card" style={{backgroundColor:`${box && exp==="fresher"?'#ececec':'white'}`,cursor:'pointer'}}>
      <div class="card-body">
      <i class="main-6 resman-icon resman-icon-briefcase"></i>
        <h5 class="card-title" style={{color:'#457eff'}}>I'm a Fresher</h5>
        <p class="card-text">I am a student/ Haven't worked after graduation.</p>
        
      </div>
    </div>
  </div>

  <small>By clicking Register, you agree to the <small style={{color:'#457eff'}}>Terms and Conditions</small> & <small style={{color:'#457eff'}}>Privacy Policy</small> of HeyJobs</small>
  <a  className="btn btn-primary w-25 text-light mt-2 pl-5" onClick={submit}>Register Now</a>
</div>



          </div>
            
              </>
    );
}
