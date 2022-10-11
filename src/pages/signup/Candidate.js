import React,{useState} from 'react'
import logo from "../../assets/new/heyjobs logo.png"
import "./Signup.css"
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import Basic from './user/Candidate/Basic';
import Work from './user/Candidate/Work';
import Education from './user/Candidate/Education';
import Last from './user/Candidate/Last';



export default function Candidate(props) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const [educational, setEducational] = useState("");
    const [professional, setProfessional] = useState("");
    const [cna, setCna] = useState("");
    const [skills, setSkills] = useState("")

    const [yoe, setYoe] = useState()
    const [comp, setComp] = useState("")
    const [salary, setSalary] = useState("")
    

    const [view,setView]=useState(1)
    const [progress,setProgress]=useState(0)
    
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
  if(!name || !email || !city || !phone || !description || !educational || !professional
    || !cna || !skills || !comp || !yoe || !salary || !pass || !repeatPassword)
  {
    alert("please fill all details");
    setView(1);
  }
  const obj1={
    
    "email": email,
    "pass": pass,
    "type": "1",
    "name": name,
    "phone": phone,
    "city": city,
    "description": description,
    "educational": educational,
    "professional": professional,
    "skills": skills,
    "cna": cna,
    "companyName": comp,
    "salary": salary,
    "yoe": yoe,


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
        {/* <div class="progress" style={{marginTop: `${view===1  || view===3 || view===4?'70px':'200px'}`}}>
  <div class="progress-bar " role="progressbar" aria-label="Example with label" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
</div> */}
         {
          view===1 || view===2 || view===3?
          view ===1?
          <>
        <Basic next={()=>setView(2)}/>
        </>: view ===2 || view===3 ?
          view===2? <>
          <Work next={()=>setView(3)}/>
          
          </>
          :<>
          <Education next={()=>setView(4)}/>
          </>
          : null
          : view===4?<>
          
          <Last/>
          
          </>: <>
          
          </>
         }
     </div>
   );
}
