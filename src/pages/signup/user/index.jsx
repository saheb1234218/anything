import React, { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";

import { AiOutlineGoogle } from 'react-icons/ai';

//styles
import styles from './style.module.css'

//images

import character from '../../../assets/back1_1.png'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Footer from "../../../components/footer/Footer";
import { storage } from "../../../firebase";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [type, setType] = useState(1)
  const [repeatPassword, setRepeatPassword] = useState("");
  const [fullname, setFullname] = useState("")
  const [mobile, setMobile] = useState("")
  const [work, setWork] = useState("")
  const [url, setUrl] = useState("")
  const [currentCity, setCurrentCity] = useState("")
  const [preferredCity, setPreferredCity] = useState("")
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  // eslint-disable-next-line
  const { signup, userSignup } = useAuth();

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    setError("");
    console.log(!!(email && password && repeatPassword && fullname && mobile && currentCity && preferredCity && work))
    if (!(email && password && repeatPassword && fullname && mobile && currentCity && preferredCity && work)) {
      console.log()
      const trimmedEmail = email.trim();
      if (password !== repeatPassword) {
        setError("Passwords don't match")
      } else {
        const res = await userSignup(trimmedEmail, password, type, fullname, mobile, work, currentCity, preferredCity, url)
        if (res.status) {
          navigate("/addEducation");
        } else {
          setError(res.error)
        }
      }
    } else {
      setError("Enter all the fields.")
    }
    setLoading(false);
  }

  const handleImage = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
    uploadImage(e.target.files[0]);
};

const uploadImage = (image) => {
    setUploading(true);
    //   const storage = getStorage();
    //   const storageRef = ref(storage, "profile/" + userDetails.uid + "-" + image.name);

    //const uploadTask = uploadBytesResumable(storageRef, image);

    const ts = Date.now();
    const uploadTask = storage
        .ref()
        .child("resume/" + ts + "-" + image.name)
        .put(image);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + prog + "% done");
            setProgress(prog);
        },
        (error) => {
            alert(error);
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("File available at", downloadURL);
                setUrl(downloadURL);
                setUploading(false);
            });
        }
    );
};

  return (
    <div className={styles.signup}>
      <Navbar />
      {loading && <p>{loading}</p>}
      <div className={styles.container}>
        <h3 className={styles.title}>Find a job & grow your career</h3>
        <div className={styles.border}>
          <div className={styles.img}>
            <img src={character} alt="background-img" />
            <div className={styles.btn1}>
              <button>
                <span>Create Account with Google</span>
                <AiOutlineGoogle />
              </button>
              {/* <button>
                <span>Login with Facebook</span>       
                <FaFacebookF/>  
                </button> */}
            </div>
          </div>

          <div className={styles.login_content}>
            <form onSubmit={handleSubmit}>
              {error && <p style={{ color: "red", fontSize: 14, marginBottom: 20 }}>{error}</p>}
              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Full Name</h5>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="What is your name ?"
                    onChange={(e) => {setFullname(e.target.value)}}
                  />
                </div>
              </div>
              <div className={[styles.input_div, styles.one].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Email</h5>
                  <input
                    type="text"
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tell us you Email ID"
                  />
                </div>
              </div>
              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Password</h5>
                  <input
                    type="password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password for your account"
                  />
                </div>
              </div>

              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Repeat Password</h5>
                  <input
                    type="password"
                    className={styles.input}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    placeholder="Repeat your password to confirm"
                  />
                </div>
              </div>


              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Mobile Number</h5>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 Mobile Number"
                    onchange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Work Status</h5>
                  <div className={styles.choice}>
                    <div>
                      <input type="radio" id="Experienced" name="Experienced" value="Experienced" checked={work === "Experienced"}
              onChange={(e)=>{ e.target.checked ? setWork(e.target.value):console.log()  }}
/>
                    <label style={{marginLeft:10}} for="Experienced">Experienced</label>
                    </div>
                    
                  <div>
                    <input type="radio" id="Fresher" name="Fresher" value="Fresher" checked={work === "Fresher"}
              onChange={(e)=>{ e.target.checked ? setWork(e.target.value):console.log() }}
/>
                    <label style={{marginLeft:10}} for="Fresher">Fresher</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Current City</h5>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Which city are you staying in?"
                    onChange={(e)=>{setCurrentCity(e.target.value)}}
                  />
                </div>
              </div>
              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Preferred Work City</h5>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Which city would you like to work in ?"
                    onChange={(e)=>{setPreferredCity(e.target.value)}}
                  />
                </div>
              </div>

              <div className={[styles.input_div, styles.pass].join(" ")}>
                <div className={styles.i}>

                </div>
                <div className={styles.div}>
                  <h5>Upload Your Resume</h5>
                  {uploading && (
                    <div style={{marginTop:10}}>
                        <font>Uploading - {progress.toFixed(2)}%</font>
                        <div
                            style={{
                                height: 3,
                                width: 200,
                                backgroundColor: "#cecece",
                                marginBottom: 20,
                            }}
                        >
                            <div
                                style={{
                                    height: 3,
                                    width: (progress / 100) * 200,
                                    backgroundColor: "#183e51",
                                }}
                            ></div>
                        </div>
                    </div>
                )}
                <label for="myfile" style={{margin: 10}}>
                    <div className="button">Select File</div>
                </label>

                <input
                    style={{ display: "none" }}
                    type="file"
                    id="myfile"
                    name="myfile"
                    accept=".pdf, .doc, .docx, .rtf"
                    onChange={handleImage}
                />
                {url && (
                    <div
                        style={{
                            border: "1px solid rgba(0, 0, 0, 0.3)",
                            height: "calc((20vw - 120px)*1.414)",
                            width: "calc(20vw - 120px)",
                            marginBottom: 10
                        }}
                    >
                        <iframe
                            title="Resume"
                            src={url}
                            frameBorder="0"
                            style={{ height: "inherit", width: "inherit" }}
                        ></iframe>
                    </div>
                )}
                </div>
              </div>


              <input type="submit" className={styles.btn} value="Sign Up" />
              
              <a href="/addEducation">Already Have an Account Login!</a>

            </form>

          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
