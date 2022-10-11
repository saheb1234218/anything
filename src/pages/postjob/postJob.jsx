import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";

//images
import jobdesc from "../../assets/jobdesc.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import website from "../../assets/website.png";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { getJobDetail, postJob, postNotification } from "../../api";
import Footer from "../../components/footer/Footer";

const categories = [
    "Engineering - Software & QA",
    "Sales & Business Development",
    "Customer Success, Service & Operations",
    "Consulting",
    "BFSI, Investments & Trading",
    "Finance & Accounting",
    "IT & Information Security",
    "Marketing & Communication",
    "Human Resources",
    "UX, Design & Architecture",
    "Healthcare & Life Sciences",
    "Data Science & Analytics",
    "Teaching & Training",
    "Engineering - Hardware & Networks",
    "Project & Program Management",
    "Production, Manufacturing & Engineering",
    "Content, Editorial & Journalism",
    "Strategic & Top Management",
    "Procurement & Supply Chain",
    "Administration & Facilities",
    "Research & Development",
    "Construction & Site Engineering",
    "Food, Beverage & Hospitality",
    "Quality Assurance"
]

const skills = ["Written and verbal communication"," Customer service"," Interpersonal skills"," Document management"," Microsoft Office skills"," Job-specific software ","Event coordination ","Organization"," Web Development ","UI/UX Designer",]

const cities = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai", "Lucknow"]
export default function PostJob() {
    const { userDetails, currentUser } = useAuth();
    
    const [jobDetails, setJobDetails] = useState({
        _id: "",
        title: "",
        company_id: "",
        city: "",
        type: "",
        hoursperweek: 0,
        salary: 0,
        salarycurrency: "",
        category: "",
        minexp: 0,
        maxexp: 0,
        description: "",
        responsibilities: "",
        qualifications: "",
        procedure: ""
    })
    const { jobid } = useParams();

    async function getData(id) {
        console.log(id);
        if (id) {
            const res = await getJobDetail(id);
            console.log(res);
            setJobDetails(res)
        }
    }
    useEffect(() => {
        console.log(jobid)
        getData(jobid)

    }, [jobid])

    return (
        <div className="userPage">
            <Navbar />
            <section className="userProfile">
                {
                    currentUser && !currentUser.email === "admin@heyjobs.in" &&
                    <div className="leftUserProfile">
                        <div className="image">
                            <img src={userDetails.profileimg} alt="User Profile" />
                        </div>
                        <div className="intro">
                            <p>{userDetails.name}</p>
                            <p style={{ fontSize: 16 }}><i>{userDetails.email}</i></p>
                        </div>
                        <div className="basicInfo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                            <ul>
                                <li>
                                    <img src={jobdesc} alt="job description icon" />
                                    <p>
                                        Description:
                                        <p>
                                            {" "}
                                            {userDetails.description ? (
                                                userDetails.description
                                            ) : (
                                                <span style={{ color: "#999" }}>
                                                    Your description
                                                </span>
                                            )}
                                        </p>
                                    </p>
                                </li>
                                <li>
                                    <img src={location} alt="location icon" />
                                    <p>
                                        Location:
                                        <p>
                                            {" "}
                                            {userDetails.city ? (
                                                userDetails.city
                                            ) : (
                                                <span style={{ color: "#999" }}>Your city</span>
                                            )}
                                        </p>
                                    </p>
                                </li>
                                <li className="phoneLi">
                                    <img src={phone} alt="phone icon" />
                                    <p>
                                        Phone:
                                        <p>
                                            {" "}
                                            {userDetails.phone ? (
                                                userDetails.phone
                                            ) : (
                                                <span style={{ color: "#999" }}>
                                                    Your phone number
                                                </span>
                                            )}
                                        </p>
                                    </p>
                                </li>
                                <li>
                                    <img src={mail} alt="mail icon" />
                                    <p>
                                        Email:
                                        <p>
                                            {" "}
                                            {userDetails.email ? (
                                                userDetails.email
                                            ) : (
                                                <span style={{ color: "#999" }}>Your email</span>
                                            )}
                                        </p>
                                    </p>
                                </li>
                                <li>
                                    <img src={website} alt="website icon" />
                                    <p>
                                        Website:
                                        <p>
                                            {" "}
                                            {userDetails.website ? (
                                                <a href={userDetails.website}>
                                                    {userDetails.website}
                                                </a>
                                            ) : (
                                                <span style={{ color: "#999" }}>Your website</span>
                                            )}
                                        </p>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                }

                <Setting userDetails={userDetails} jobDetails={jobDetails} uid={currentUser.uid} />
            </section>

            <Footer />
        </div>
    );
}

function Setting(props) {
    const { jobDetails, userDetails, uid } = props;
    const [word,setWord]=useState(false);
    console.log(jobDetails)

    const [title, settitle] = useState(jobDetails.title)
    const [city, setCity] = useState(jobDetails.city)
    const [type, settype] = useState(jobDetails.type)
    const [hoursperweek, sethoursperweek] = useState(jobDetails.hoursperweek)
    const [salary, setsalary] = useState(jobDetails.salary)
    const [salarycurrency, setsalarycurrency] = useState(jobDetails.salarycurrency)
    const [category, setcategory] = useState(jobDetails.category)
    const [minexp, setminexp] = useState(jobDetails.minexp)
    const [maxexp, setmaxexp] = useState(jobDetails.maxexp)
    const [description, setdescription] = useState(jobDetails.description)
    const [responsibilities, setresponsibilities] = useState(jobDetails.responsibilities)
    const [qualifications, setqualifications] = useState(jobDetails.qualifications)
    const [procedure, setprocedure] = useState(jobDetails.procedure)

    const company_id = uid

    const navigate = useNavigate();

    async function handleSubmit() {
        const coins=userDetails.coins;
        const uid=userDetails.uid;
        const res = await postJob(
            title,
            company_id,
            type,
            hoursperweek,
            salary,
            salarycurrency,
            category,
            minexp,
            maxexp,
            description,
            responsibilities,
            qualifications,
            procedure,
            city,
            uid,
            coins
        );
        console.log(res);
        if (res.status === 200) {
            await postNotification(uid, "Posted a new Job")
            navigate("/jobdetails/" + res.id);
        }
    }

    useEffect(() => {
      settitle(jobDetails.title)
      settype(jobDetails.type)
      setCity(jobDetails.city)
      sethoursperweek(jobDetails.hoursperweek)
      setsalary(jobDetails.salary.$numberDecimal)
      setsalarycurrency(jobDetails.salarycurrency)
      setcategory(jobDetails.category)
      setminexp(jobDetails.minexp.$numberDecimal)
      setmaxexp(jobDetails.maxexp.$numberDecimal)
      setdescription(jobDetails.description)
      setresponsibilities(jobDetails.responsibilities)
      setqualifications(jobDetails.qualifications)
      setprocedure(jobDetails.procedure)
      
    }, [jobDetails])
    

    return (
        <div className="rightUserProfile">

            <div className="settingContainer">
                <h3>Basic Information</h3>
                <div className="input-row">
                    <font className="input-label">Title</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">Skills Needed</font>
                    <font>:</font>
                    <select  value={type} onChange={(e) => settype(e.target.value)}>
                        <option value="Default">Default</option>
                        {
                            skills.map(category=><option value={category}>{category}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
                    
                </div>
                <div className="input-row">
                    <font className="input-label">Category / Field</font>
                    <font>:</font>
                    
                    <select value={category} onChange={(e) => setcategory(e.target.value)}>
                        <option value="Default">Default</option>
                        {
                            categories.map(category=><option value={category}>{category}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="input-row">
                    <font className="input-label">City</font>
                    <font>:</font>
                    
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="Default">Default</option>
                        {
                            cities.map(category=><option value={category}>{category}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>


            <div className="settingContainer">
                <h3>Work Information</h3>
                <div className="input-row">
                    <font className="input-label">Salary Currency</font>
                    <font>:</font>
                    <select value={salarycurrency} onChange={(e) => setsalarycurrency(e.target.value)}>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="input-row">
                    <font className="input-label">Salary p.a.</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Salary p.a."
                        value={salary}
                        onChange={(e) => setsalary(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">Minimum Experience Required</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Minimum Experience Required ( Years )"
                        value={minexp}
                        onChange={(e) => setminexp(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Job Description</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your job details"
                        value={description}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setdescription(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Job Responsibities</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your job responsibilities"
                        value={responsibilities}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setresponsibilities(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Job Qualifications</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your job qualifications"
                        value={qualifications}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setqualifications(e.target.value)}
                    />
                </div>
            </div>

            

            <button
                onClick={(e) => {
                    if(userDetails.coins<200){
                        setWord(true);
                    }
                    else{
                        handleSubmit(e);
                    }
                    
                }}
            >
                Post a Job for 200 <img style={{width:'30px' ,height:'30px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/000/545/896/original/money-coin-vector-icon.jpg"></img>
            </button>
            {word?<small style={{color:'red'}}>Sorry can't post a job! For more coins contact Admin/Support</small>:null}
        </div>
    );
}
