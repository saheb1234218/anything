import React,{useState} from 'react'
import logo from "../../assets/new/heyjobs logo.png"
import "./Signup.css"
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import Welcome from './user/Employer/Welcome';
import Company from './user/Employer/Company';


export default function AddDetails(props) {
    const [view,setView]=useState(1)
    const [progress,setProgress]=useState(0)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [comName, setComName] = useState("")
    const [comType, setComType] = useState("")
    const [comSize, setComSize] = useState("")
    const { signup } = useAuth();
    const navigate = useNavigate()

const submit=async(e)=>{
  e.preventDefault();
  console.log(name,email,pass,repeatPassword,comName,comType,comSize);
  if(!name || !email || !pass || !comName || !repeatPassword || !comSize || !comType)
  {
    alert("please fill all details");
    setView(1);
  }
  const obj1={
    
    "email": email,
    "pass": pass,
    "type": "2",
    "name": name,
    "phone": props.phone,
    "companyName": comName,
    "companyType": comType,
    "companySize": comSize
  }
  const x=await signup(obj1);
  console.log(x.data);
  navigate("/dashboard/setting");
}


const change=(v,e)=>{
  
  if(v===4 && (pass!=repeatPassword)){
    
alert("Both passwords not matching");
setView(4);
  }
  else{
    setView(v+1);
    setProgress(progress+25);
  }
    
}


   
   return (
     <div> 
        {/* <div class="progress" style={{marginTop: `${view===2 || view===3 || view===4?'100px':'0px'}`}}>
  <div class="progress-bar" role="progressbar" aria-label="Example with label" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
</div> */}
         {
          view===1 || view===2 || view===3?
          view ===1?
          <>
        <Welcome next={()=>setView(2)}/>
        </>: view ===2 || view===3 ?
          view===2? <>
          
          <Company next={()=>setView(3)}/>
          
          </>
          :<>
          <form style={{width:'600px'}} className='shadow p-5 mt-4'>
      
          <h4>Enter Company Details</h4>
      <div class="mb-3 mt-1">
          <label for="exampleInputPassword1" class="form-label">Company Name</label>
          <input value={comName} onChange={(e)=>setComName(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Company Type</label>
          <input value={comType} onChange={(e)=>setComType(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>
      
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Company Size</label>
          <input value={comSize} type="text" onChange={(e)=>setComSize(e.target.value)} class="form-control" id="exampleInputPassword1"/>
        </div>
      <button  onClick={()=>change(3)} class="btn btn-primary">Next</button>
      </form>
          </>
          : null
          : view===4?<>
          
          <form style={{width:'600px'}} className='shadow p-5 mt-4'>
      
          <h4>Setup your password</h4>
      <div class="mb-3 mt-1">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 mt-1">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
          <input value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        
        
      <button  onClick={()=>change(4)} class="btn btn-primary">Next</button>
      </form>
          
          </>: <>
          <form style={{width:'600px'}} className='shadow p-4 mt-4 d-flex flex-column justify-content-center align-items-center'>
          <span  id="complete" class="badge text-bg-primary">COMPLETE</span>
      
      <button  onClick={submit} class="btn btn-primary">SUBMIT</button>
      </form>
          </>
         }
     </div>
   );
}
