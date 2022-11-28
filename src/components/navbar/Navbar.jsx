import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/new/heyjobs logo.png";
import classes from "./navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate()
  const { currentUser, userDetails,logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const [backColor, setBackColor] = useState("rgba(255,255,255,0.0)");
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
    
      const height =
        document.documentElement.scrollHeight
    
      const scrolled = winScroll / height
    
      if(scrolled * 100 > 2.5){
        setBackColor("rgba(255,255,255,1)")
      }else{
        setBackColor("rgba(255,255,255,0.0)")
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener('scroll', listenToScroll)

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', listenToScroll)
    }
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate("/signup")
  };

  return (
    <header className={classes.header} style={{backgroundColor: backColor}}>
      <div className={classes.header__content}>
        <a href="/" className={classes.header__content__logo}>
          <img src={logo} style={{width:"120px", height:"40px"}} alt="logo" />
        </a>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          {
            !currentUser &&
            <>
              <ul>
                <li>
                  <a href="/signup" onClick={menuToggleHandler}>
                    Hire Now
                  </a>
                </li>
                <li>
                  <a href="/joblist" onClick={menuToggleHandler}>
                    Get a Job
                  </a>
                </li>
                <li>
                  <a href="/login" onClick={menuToggleHandler}>
                    Sign In
                  </a>
                </li>
              </ul>
              <button onClick={ctaClickHandler}>Sign Up</button>
            </>
          }

          {
            (currentUser && userDetails) &&
            <>
              <ul className={classes.hamburger}>
                {
                  userDetails.type === 2 &&
                  <li>
                    <a href="/postjob" onClick={menuToggleHandler}>
                      Post a Job
                    </a>
                  </li>
                }
                {userDetails.type===1 && 
                <li>
                <a href="/joblist" onClick={menuToggleHandler}>
                  Browse
                </a>
              </li>
                }
                
                <li>
                  <a href="/dashboard/manage" onClick={menuToggleHandler}>
                    Manage
                  </a>
                </li>
                <li>
                  <a href="/dashboard/notification" onClick={menuToggleHandler}>
                    Notifications
                  </a>
                </li>
                
                <li>
                  <a href="/dashboard" onClick={menuToggleHandler} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {userDetails.name}
                    <img src={userDetails.profileimg} alt="User Profile" style={{width: 30, height: 30, marginLeft: 20, borderRadius: 200}} />
                  </a>
                </li>
                <li>
                  {userDetails.type==2?<a   style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    
                    <img src="https://th.bing.com/th/id/OIP.HKfjpBnfd_r8oDlMOU59bAHaHa?pid=ImgDet&rs=1" alt="User Profile" style={{width: 30, height: 30, marginLeft: 20, borderRadius: 200}} />
                    {userDetails.coins}
                  </a>:null}
                </li>
                <li>
                  <a href="/login" onClick={()=>{
                    menuToggleHandler();
                    logout();
                  }
                    
                    }>
                    Logout
                  </a>
                </li>
              </ul>
            </>
          }
          
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
