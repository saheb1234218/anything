import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

import { AiOutlineGoogle } from 'react-icons/ai';
import Employee from "./employeer"
//styles
import './Signup.css';

//images
import Candidate from "./Candidate";
import character from '../../assets/back1_1.png'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../../components/footer/Footer";

export default function Signup() {
  const [view,setView]=useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(0)
  const [repeatPassword, setRepeatPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { signup } = useAuth();

  const submit=()=>{
    }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    setError("");

    if (email && password && repeatPassword) {
      console.log()
      const trimmedEmail = email.trim();
      if (password !== repeatPassword) {
        setError("Passwords don't match")
      } else if (!type) {
        setError("Select Account Type")
      } else {
        const res = await signup(trimmedEmail, password, type)
        if (res.status) {
          navigate("/dashboard/setting");
        } else {
          setError(res.error)
        }
      }
    } else {
      setError("Enter all the fields.")
    }
    setLoading(false);
  }


  //login page effects

  useEffect(() => {
    // const inputs = document.querySelectorAll(".input");
    // function addcl() {
    //   let parent = this.parentNode.parentNode;
    //   parent.classList.add("focus");
    // }

    // function remcl() {
    //   let parent = this.parentNode.parentNode;
    //   if (this.value === "") {
    //     parent.classList.remove("focus");
    //   }
    // }

    // inputs.forEach(input => {
    //   input.addEventListener("focus", addcl);
    //   input.addEventListener("blur", remcl);
    // });
  }, [])

  return (
    <div className="">
      <Navbar />

      {/* {loading && <p>{loading}</p>} */}
      <div className="container" style={{ marginTop: '100px' }}>
        
            {view===false?<Employee set={()=>setView(true)}/>:<Candidate set={()=>setView(false)}/>}
          
            

            {/* <form onSubmit={handleSubmit}>
              <h2 className="title">Log In</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input 
                    type="text" 
                    className="input"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input 
                    type="password" 
                    className="input"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
              </div>
              
              <a href="/login">Login as employee</a>
              <a href="/">Forgot Password?</a>
              <input type="submit" className="btn" value="Log in" />
              <a href="/signup">Dont Have an Account Sign up!</a>
              {error && <p>{error}</p>}
            </form> */}

       
      </div>
      <Footer />


    </div>

    // <div className="signup">
    //   <Navbar/>
    //   {loading && <p>{loading}</p>}
    //   <div className="container">
    //   <h3 className="title">Sign Up As :</h3>
    //         <div className="account-type-container">
    //           <div className="account-type" onClick={() =>{navigate("/signup/user");}} style={{backgroundColor: type === 1 ? "#0C222C": "#FFFFFF", color: type===1? "#fff": "#000"}}>Candidate</div>
    //           <div className="account-type" onClick={() =>{setType(2)}} style={{backgroundColor: type === 2 ? "#0C222C": "#FFFFFF", color: type===2? "#fff": "#000"}}>Employer</div>
    //         </div>
    //     <div className="border">
    //     <div className="img">
    //         <img src={character}  alt="background-img" />
    //         <div className="btn1">
    //             <button>
    //               <span>Create Account with Google</span>
    //               <AiOutlineGoogle/>
    //             </button>
    //             {/* <button>
    //             <span>Login with Facebook</span>       
    //             <FaFacebookF/>  
    //             </button> */}
    //         </div>
    //       </div>

    //       <div className="login-content">


    //         <form onSubmit={handleSubmit}>
    //           {error && <p style={{color: "red", fontSize: 14, marginBottom: 20}}>{error}</p>}
    //           <div className="input-div one">
    //             <div className="i">
    //               <i className="fas fa-user"></i>
    //             </div>
    //             <div className="div">
    //               <h5>Email</h5>
    //               <input 
    //                 type="text" 
    //                 className="input"
    //                 onChange={(e)=>setEmail(e.target.value)}
    //                 />
    //             </div>
    //           </div>
    //           <div className="input-div pass">
    //             <div className="i">
    //               <i className="fas fa-lock"></i>
    //             </div>
    //             <div className="div">
    //               <h5>Password</h5>
    //               <input 
    //                 type="password" 
    //                 className="input"
    //                 onChange={(e)=>setPassword(e.target.value)}
    //                 />
    //             </div>
    //           </div>

    //           <div className="input-div pass">
    //             <div className="i">
    //               <i className="fas fa-lock"></i>
    //             </div>
    //             <div className="div">
    //               <h5>Repeat Password</h5>
    //               <input 
    //                 type="password" 
    //                 className="input"
    //                 onChange={(e)=>setRepeatPassword(e.target.value)}
    //                 />
    //             </div>
    //           </div>
    //           {
    //             (type === 2) && <div className="input-div pass ">
    //             <div className="i">

    //             </div>
    //             <div className="div">
    //               <h5>Company Size</h5>
    //               <input 
    //                 type="number" 
    //                 className="input"
    //                 />
    //             </div>
    //           </div>
    //           }
    //           {
    //             (type === 2) && <div className="input-div pass">
    //             <div className="i">

    //             </div>
    //             <div className="div">
    //               <h5>Year Founded</h5>
    //               <input 
    //                 type="date" 
    //                 className="input"
    //                 />
    //             </div>
    //           </div>
    //           }
    //           {
    //             (type === 2) && <div className="input-div pass">
    //             <div className="i">

    //             </div>
    //             <div className="div">
    //               <h5>Company Industry</h5>
    //               <input 
    //                 type="text" 
    //                 className="input"
    //                 />
    //             </div>
    //           </div>
    //           }

    //           <input type="submit" className="btn" value="Sign Up" />
    //           <a href="/login">Already Have an Account Login!</a>

    //         </form>

    //       </div>
    //     </div>
    //   </div>


    //   <Footer/>
    // </div>
  );
}
