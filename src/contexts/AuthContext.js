import React, { useContext, useState, useEffect } from "react";
import { createUser, getuserDetail, updateUserDetails } from "../api";
// eslint-disable-next-line
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line

  async function signup(obj) {
    try{
      console.log(auth)
      const trimmedEmail = obj.email.trim();
      console.log(obj.email,obj.password)
      const res = await auth.createUserWithEmailAndPassword(trimmedEmail, obj.password);
      console.log(res)
      if(obj.type==="2"){
        
        obj["uid"]=res.user.uid;
        const res2 =  createUser(obj);
        console.log(res2);
        await res.user.sendEmailVerification()
      return {
        status: true,
        data: res,
        data2: res2
      }
      }
      else{
        obj["uid"]=res.user.uid;
        const res2 =  createUser(obj);
        console.log(res2);
        await res.user.sendEmailVerification()
      return {
        status: true,
        data: res,
        data2: res2
      }
      }
      
      
      
      
    }catch(e){
      console.log(e)
      return {
        status: false,
        error: e.message
      }
    }
    
  }

  async function userSignup(email, password, type, name, phone, status, currentCity, preferredCity, resume) {
    try{
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const res2 = await createUser(res.user.uid, email, type);
      const res3 = await updateUserDetails(res.user.uid, name, phone, status, currentCity, preferredCity, resume)
      await res.user.sendEmailVerification()
      return {
        status: true,
        data: res,
        data2: res2,
        data3: res3
      }
    }catch(e){
      console.log(e)
      return {
        status: false,
        error: e.message
      }
    }
    
  }

  async function login(email, password) {
    try{
      const res = await auth.signInWithEmailAndPassword(email, password);
      return {
        status: true,
        data: res
      }
    }catch(e){
      console.log(e)
      return {
        status : false,
        error: e.message,
      }
    }
  }

  function logout() {
    return auth.signOut();
  }

  async function resetPassword(email) {
    try{
      const res = await auth.sendPasswordResetEmail(email);
      return {
        status: true,
        data: res
      }
    }catch(e){
      console.log(e)
      return {
        status : false,
        error: e.message,
      }
    }
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  async function getUserData(){
    setUserDetails(await getuserDetail(currentUser.uid));
  }
  // async function getDataofUser(id){
  //   setUserDetails(await getuserDetail(id));
  // }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        setCurrentUser(user);
        setUserDetails(await getuserDetail(user.uid));
      }else{
        setCurrentUser(null);
        setUserDetails(null);
        
      }
      setLoading(false);
    });    

    return unsubscribe;

  }, []);



  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    userDetails,
    
    getUserData,
    userSignup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}