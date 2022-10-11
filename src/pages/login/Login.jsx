import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";


import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineGoogle} from 'react-icons/ai';

//styles
import './Login.css';

//images

import character from '../../assets/back1_1.png'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Footer from "../../components/footer/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { login} = useAuth();


  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
      const res = await login(email.trim(), password)
      if(res.status) {
        if(email.trim() === "india@gmail.com"){
          navigate("/admin");
        }else{
        navigate("/joblist");
        }
      }else{
        setError(res.error)
      }
  }


    //login page effects
  
    useEffect(()=>{
      const inputs = document.querySelectorAll(".input");
      function addcl(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
      }
  
      function remcl(){
        let parent = this.parentNode.parentNode;
        if(this.value === ""){
          parent.classList.remove("focus");
        }
      }
  
      inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
      });
    },[])

  return (
    <div className="signup">
      <Navbar/>
      {loading && <p>{loading}</p>}
      <div className="container">
        <div className="border">
        <div className="img">
            <img src={character}  alt="background-img" />
            <div className="btn1">
                <button>
                  <span>Login with Google</span>
                  <AiOutlineGoogle/>
                </button>
                <button>
                <span>Login with Facebook</span>       
                <FaFacebookF/>  
                </button>
            </div>
          </div>

          <div className="login-content">

            <form onSubmit={handleSubmit}>
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
            </form>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
