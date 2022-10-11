import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";



import "./userProfile.css";

//images
import jobdesc from "../../assets/jobdesc.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import website from "../../assets/website.png";
//social icons
import fb from "../../assets/fb.png";
import twt from "../../assets/twt.png";
import ln from "../../assets/ln.png";
import google from "../../assets/google.png";
import eclipse from "../../assets/eclipse.png";

//icons
import {
    AiFillDashboard,
    AiOutlineFile,
    AiOutlineFileDone,
    AiOutlineDelete,
} from "react-icons/ai";

import { MdOutlineLibraryBooks } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { BsArrowRightShort } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import {
    getAllCompanyApplicant,
    getAllJobsApplied,
    getAllJobsPosted,
    getJobDetail,
    getNotification,
    getuserDetail,
    postNotification,
    updateUser,
    updateUserResume,
} from "../../api";
import { storage } from "../../firebase";
import Footer from "../../components/footer/Footer";

export default function UserProfile() {
    const { userDetails, logout } = useAuth();
    const { section } = useParams();
    console.log(section);

    return (
        <>
            {userDetails && (
                <div className="userPage">
                    <Navbar />
                    <section className="userProfile">
                        <div className="leftUserProfile">
                            <div className="image">
                                <img src={userDetails.profileimg} alt="User Profile" />
                            </div>
                            <div className="intro">
                                <p>{userDetails.name}</p>
                                <p>{userDetails.email}</p>
                            </div>
                            <div className="profileList">
                                <ul>
                                    <li>
                                        <a href="/dashboard/">
                                            <AiFillDashboard />
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/setting">
                                            <AiOutlineFile />
                                            <span>Profile Setting</span>
                                        </a>
                                    </li>
                                    {userDetails.type === 1 && (
                                        <>
                                            <li>
                                                <a href="/dashboard/resume">
                                                    <AiOutlineFileDone />
                                                    <span>Resume</span>
                                                </a>
                                            </li>
                                            {/* <li>
                                        <a href="/dashboard/favourite">
                                            <AiFillHeart />
                                            <span>Favourites</span>
                                        </a>
                                    </li> */}
                                            <li>
                                                <a href="/dashboard/manage">
                                                    <AiFillDashboard />
                                                    <span>Applied job</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/dashboard/pricing">
                                                    <AiFillDashboard />
                                                    <span>Candidate Plan</span>
                                                </a>
                                            </li>
                                        </>
                                    )}
                                    {userDetails.type === 2 && (
                                        <>
                                            <li>
                                                <a href="/dashboard/candidate">
                                                    <AiOutlineFileDone />
                                                    <span>Candidates</span>
                                                </a>
                                            </li>
                                            {/* <li>
                                        <a href="/dashboard/favourite">
                                            <AiFillHeart />
                                            <span>Favourites</span>
                                        </a>
                                    </li> */}
                                            <li>
                                                <a href="/dashboard/manage">
                                                    <AiFillDashboard />
                                                    <span>Job History</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/dashboard/pricing">
                                                    <AiFillDashboard />
                                                    <span>Employer Plans</span>
                                                </a>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div className="setting">
                                <p
                                    onClick={(e) => {
                                        logout();
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <FiLogOut /> <span>Logout</span>
                                </p>
                                <p>
                                    <AiOutlineDelete /> <span>Delete Account</span>
                                </p>
                            </div>
                        </div>

                        {!section && (
                            <div className="rightUserProfile">
                                <div className="profileInfo">
                                    <img src={userDetails.profileimg} alt="User Profile" />
                                    <div className="name">
                                        <h3>{userDetails.name}</h3>
                                        <ul>
                                            <li>
                                                {userDetails.description ? (
                                                    userDetails.description
                                                ) : (
                                                    <span style={{ color: "#999" }}>
                                                        Your description
                                                    </span>
                                                )}
                                            </li>
                                            <li style={{ listStyle: "inside" }}>
                                                {userDetails.city ? (
                                                    userDetails.city
                                                ) : (
                                                    <span style={{ color: "#999" }}>Your city</span>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="/dashboard/setting">
                                        <button>Edit Profile</button>
                                    </a>
                                </div>

                                {/* {userDetails.type === 2 && (
                                    <div className="employer-info">
                                        <div className="item">
                                            <p>
                                                <MdOutlineLibraryBooks />
                                            </p>
                                            <div>
                                                <h2>260</h2>
                                                <h4>Applied Job</h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <p>
                                                <MdOutlineLibraryBooks />
                                            </p>
                                            <div>
                                                <h2>260</h2>
                                                <h4>Applied Job</h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <p>
                                                <MdOutlineLibraryBooks />
                                            </p>
                                            <div>
                                                <h2>260</h2>
                                                <h4>Applied Job</h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <p>
                                                <MdOutlineLibraryBooks />
                                            </p>
                                            <div>
                                                <h2>260</h2>
                                                <h4>Applied Job</h4>
                                            </div>
                                        </div>
                                    </div>
                                )} */}
                                <div className="Info">
                                    <div className="leftInfo">
                                        <div className="basicInfo">
                                            <h1>Basic Information</h1>
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
                                                                <span style={{ color: "#999" }}>
                                                                    Your email
                                                                </span>
                                                            )}
                                                        </p>
                                                    </p>
                                                </li>
                                                {userDetails.type === 2 && (
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
                                                                    <span style={{ color: "#999" }}>
                                                                        Your website
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </p>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        {userDetails.type === 1 && (
                                            <div className="socialProfile">
                                                <h1>Social Profile</h1>
                                                <ul className="socialIcon">
                                                    <a
                                                        href={
                                                            userDetails.linkedin ? userDetails.linkedin : "#"
                                                        }
                                                    >
                                                        <div className="socialEclipse">
                                                            <img src={eclipse} alt="" />
                                                            <div>
                                                                <img
                                                                    className="icons Ln"
                                                                    src={ln}
                                                                    alt="linkedin icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className="rightInfo">
                                        {userDetails.type === 2 && (
                                            <div className="socialProfile">
                                                <h1>Social Profile</h1>
                                                <ul className="socialIcon">
                                                    <a
                                                        href={
                                                            userDetails.facebook ? userDetails.facebook : "#"
                                                        }
                                                    >
                                                        <div className="socialEclipse">
                                                            <img src={eclipse} alt="" />
                                                            <div>
                                                                <img
                                                                    className="icons fb"
                                                                    src={fb}
                                                                    alt="facebook icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href={
                                                            userDetails.twitter ? userDetails.twitter : "#"
                                                        }
                                                    >
                                                        <div className="socialEclipse">
                                                            <img src={eclipse} alt="" />
                                                            <div>
                                                                <img
                                                                    className="icons twt"
                                                                    src={twt}
                                                                    alt="twitter icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href={
                                                            userDetails.linkedin ? userDetails.linkedin : "#"
                                                        }
                                                    >
                                                        <div className="socialEclipse">
                                                            <img src={eclipse} alt="" />
                                                            <div>
                                                                <img
                                                                    className="icons Ln"
                                                                    src={ln}
                                                                    alt="linkedin icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href={
                                                            userDetails.googleplus
                                                                ? userDetails.googleplus
                                                                : "#"
                                                        }
                                                    >
                                                        <div className="socialEclipse">
                                                            <img src={eclipse} alt="" />
                                                            <div>
                                                                <img
                                                                    className="icons ggl"
                                                                    src={google}
                                                                    alt="google icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        )}
                                        {userDetails.type === 2 && (
                                            <div className="yourLocation">
                                                <h1>Your Location</h1>
                                                <div className="googleMap">
                                                    <iframe
                                                        title="Location of Users"
                                                        src={
                                                            "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14719.95917800627!2d" +
                                                            userDetails.longitude.$numberDecimal +
                                                            "!3d" +
                                                            userDetails.latitude.$numberDecimal +
                                                            "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1654543270593!5m2!1sen!2sin"
                                                        }
                                                        loading="lazy"
                                                        frameBorder={0}
                                                    ></iframe>
                                                </div>
                                            </div>
                                        )}
                                        {/* {userDetails.type === 1 && (
                                            <div className="rightList">
                                                <div className="item">
                                                    <p>
                                                        <MdOutlineLibraryBooks />
                                                    </p>
                                                    <div>
                                                        <h2>260</h2>
                                                        <h4>Applied Job</h4>
                                                    </div>
                                                </div>

                                                <div className="item">
                                                    <p>
                                                        <MdOutlineLibraryBooks />
                                                    </p>
                                                    <div>
                                                        <h2>260</h2>
                                                        <h4>Applied Job</h4>
                                                    </div>
                                                </div>

                                                <div className="item">
                                                    <p>
                                                        <MdOutlineLibraryBooks />
                                                    </p>
                                                    <div>
                                                        <h2>260</h2>
                                                        <h4>Applied Job</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        )}

                        {section === "setting" && <Setting userDetails={userDetails} />}
                        {section === "resume" && <Resume userDetails={userDetails} />}
                        {section === "manage" && userDetails.type === 1 && (
                            <Manage userDetails={userDetails} />
                        )}
                        {section === "candidate" && userDetails.type === 2 && (
                            <Candidate userDetails={userDetails} />
                        )}
                        {section === "manage" && userDetails.type === 2 && (
                            <ManageEmployer userDetails={userDetails} />
                        )}
                        {section === "notification" && (
                            <Notification userDetails={userDetails} />
                        )}
                    </section>

                    <Footer />
                </div>
            )}
            {!userDetails && (
                <div className="welcome">
                    <img src={require("../../assets/new/heyjobs logo.png")} alt="" />
                    <h3>We are eager to welcome you.</h3>
                    <button onClick={(e) => window.location.reload()}>
                        Proceed to Profile Setup
                    </button>
                </div>
            )}
        </>
    );
}
function Candidate(props) {
    const { userDetails } = props;
    const [list, setList] = useState(null);
    async function getData() {
        const data = await getAllCompanyApplicant(userDetails.uid);
        setList(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                {list &&
                    list.map((item, index) => {
                        return (
                            <ApplicantManageProfile
                                id={item.applicant_id}
                                description={item.description}
                                key={index}
                                jobid={item.job_id}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

function Notification(props) {
    const { userDetails } = props;
    const [data, setData] = useState(null);

    async function getData() {
        const res = await getNotification(userDetails.uid);
        console.log(res);
        setData(res.reverse());
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="rightUserProfile">
            <div className="activity" id="notification">
                <h1>Recent Activity</h1>
                {(!data || !data.length > 0) && (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {" "}
                        No Notifications Yet
                    </div>
                )}
                {data && data.length > 0 && (
                    <>
                        {data.map((item, index) => {
                            const date = new Date(item.createdAt);
                            return (
                                <div>
                                    <BsArrowRightShort
                                        style={{
                                            fontSize: "32px",
                                        }}
                                    />
                                    <div>
                                        <p>{item.content}</p>
                                        <p>
                                            {+date.getHours() +
                                                ":" +
                                                date.getMinutes() +
                                                ":" +
                                                date.getSeconds() +
                                                "   ~   " +
                                                date.getDate() +
                                                "-" +
                                                (date.getMonth() + 1) +
                                                "-" +
                                                date.getFullYear()}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}

function Setting(props) {
    const { userDetails } = props;
    const [name, setName] = useState(userDetails.name);
    const [city, setCity] = useState(userDetails.city);
    const [phone, setPhone] = useState(userDetails.phone);
    const [email, setEmail] = useState(userDetails.email);
    const [website, setWebsite] = useState(userDetails.website);
    const [facebook, setFacebook] = useState(userDetails.facebook);
    const [twitter, setTwitter] = useState(userDetails.twitter);
    const [linkedin, setLinkedin] = useState(userDetails.linkedin);
    const [googleplus, setGoogleplus] = useState(userDetails.googleplus);
    const [description, setDescription] = useState(userDetails.description);
    const [profileimg, setProfileimg] = useState(userDetails.profileimg);
    const [latitude, setLatitude] = useState(userDetails.latitude.$numberDecimal);
    const [longitude, setLongitude] = useState(
        userDetails.longitude.$numberDecimal
    );
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [uploadingDoc, setUploadingDoc] = useState(false);
    const [companyDoc, setCompanyDoc] = useState(userDetails.companyDocument);
    const [kycDoc, setKycDoc] = useState(userDetails.kycDocument);
    const [salarySlip, setSalarySlip] = useState(userDetails.salarySlip);
    const [certificates, setCertificates] = useState(userDetails.certificates);
    const [addressProof, setAddressProof] = useState(userDetails.addressProof);
    const [releaseLetter, setReleaseLetter] = useState(userDetails.releaseLetter);
    const [educational, setEducational] = useState(userDetails.educational);
    const [professional, setProfessional] = useState(userDetails.professional);
    const [cna, setCna] = useState(userDetails.cna);
    const [skills, setSkills] = useState(userDetails.skills)

    const navigate = useNavigate();
    const { getUserData } = useAuth();

    async function handleSubmit() {
        console.log(companyDoc, kycDoc);
        const res = await updateUser(
            userDetails.uid,
            name,
            city,
            phone,
            email,
            website,
            facebook,
            twitter,
            linkedin,
            googleplus,
            description,
            profileimg,
            latitude,
            longitude,
            userDetails.resume,
            companyDoc,
            kycDoc,
            salarySlip,
            certificates,
            addressProof,
            releaseLetter,
            educational,
            professional,
            cna,
            skills
        );
        console.log(res);
        if (res.status === 200) {
            await getUserData();
            await postNotification(
                userDetails.uid,
                "Successfully updated your Profile."
            );
            navigate("/dashboard");
        }
    }

    async function handleLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    const handleImage = (e) => {
        setProfileimg(URL.createObjectURL(e.target.files[0]));
        uploadImage(e.target.files[0]);
    };

    const uploadImage = (image) => {
        setUploading(true);
        //   const storage = getStorage();
        //   const storageRef = ref(storage, "profile/" + userDetails.uid + "-" + image.name);

        //const uploadTask = uploadBytesResumable(storageRef, image);

        const uploadTask = storage
            .ref()
            .child("profile/" + userDetails.uid + "-" + image.name)
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
                    setProfileimg(downloadURL);
                    setUploading(false);
                });
            }
        );
    };

    const handleCompanyDocument = (e) => {
        setCompanyDoc(URL.createObjectURL(e.target.files[0]));
        uploadDocument(e.target.files[0], setCompanyDoc);
    };

    const handleKycDocument = (e) => {
        setKycDoc(URL.createObjectURL(e.target.files[0]));
        uploadDocument(e.target.files[0], setKycDoc);
    };

    const handleAllDocument = (e, setState) => {
        setState(URL.createObjectURL(e.target.files[0]));
        uploadDocument(e.target.files[0], setState);
    };

    const uploadDocument = (image, setState) => {
        setUploadingDoc(true);
        //   const storage = getStorage();
        //   const storageRef = ref(storage, "profile/" + userDetails.uid + "-" + image.name);

        //const uploadTask = uploadBytesResumable(storageRef, image);

        const uploadTask = storage
            .ref()
            .child("document/" + userDetails.uid + "/" + image.name)
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
                    setState(downloadURL);
                    setUploadingDoc(false);
                });
            }
        );
    };

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                <h3>{userDetails.type === 1 ? "Profile Picture" : "Company Logo"}</h3>
                <img
                    src={profileimg}
                    alt="Profile"
                    style={{ width: 200, height: 200, borderRadius: 500, margin: 20 }}
                />

                {uploading && (
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
                )}
                <label for="myfile">
                    <div className="button">Upload New Picture</div>
                </label>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="myfile"
                    name="myfile"
                    accept=".jpg, .png, .jpeg, .jfif, .gif, .bmp, .tif, .tiff|image/*"
                    onChange={handleImage}
                />
            </div>

            {userDetails.type === 2 && (
                <div className="settingContainer">
                    <h3>Verification</h3>
                    {uploadingDoc && (
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
                    )}
                    <div className="settingObjectContainer">
                        <div>
                            {companyDoc ? (
                                <a href={companyDoc} target="_blank">
                                    View Document
                                </a>
                            ) : null}
                            {userDetails.companyVerified && (
                                <font style={{ color: "green" }}>Company Verified</font>
                            )}
                            {!userDetails.companyVerified && (
                                <>
                                    {userDetails.companyDocument ? (
                                        <font style={{ color: "orange" }}>
                                            Waiting for Verification
                                        </font>
                                    ) : (
                                        <font style={{ color: "red" }}>Company Not Verified</font>
                                    )}
                                </>
                            )}
                            {!userDetails.companyVerified && (
                                <>
                                    <label for="mycompanydoc">
                                        <div className="button">
                                            Upload for Company Verification
                                        </div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="mycompanydoc"
                                        name="mycompanydoc"
                                        accept=".pdf"
                                        onChange={handleCompanyDocument}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>
                        <div>
                            {kycDoc ? (
                                <a href={kycDoc} target="_blank">
                                    View Document
                                </a>
                            ) : null}
                            {userDetails.kycVerified && (
                                <font style={{ color: "green" }}>KYC Verified</font>
                            )}
                            {!userDetails.kycVerified && (
                                <>
                                    {userDetails.kycDocument ? (
                                        <font style={{ color: "orange" }}>
                                            Waiting for Verification
                                        </font>
                                    ) : (
                                        <font style={{ color: "red" }}>KYC Not Verified</font>
                                    )}
                                </>
                            )}
                            {!userDetails.kycVerified && (
                                <>
                                    <label for="mykycdoc">
                                        <div className="button">Upload for Kyc Verification</div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="mykycdoc"
                                        name="mykycdoc"
                                        accept=".pdf"
                                        onChange={handleKycDocument}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {userDetails.type === 1 && (
                <div className="settingContainer">
                    <h3>Documents</h3>
                    {uploadingDoc && (
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
                    )}
                    <div className="settingObjectContainer">
                        <div>
                            {salarySlip ? (
                                <a href={salarySlip} target="_blank">
                                    View Salary Slip
                                </a>
                            ) : null}

                            {!userDetails.companyVerified && (
                                <>
                                    <label for="mysalaryslip">
                                        <div className="button">Upload for Salary Slip</div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="mysalaryslip"
                                        name="mysalaryslip"
                                        accept=".pdf"
                                        onChange={(e) => handleAllDocument(e, setSalarySlip)}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>

                        <div>
                            {certificates ? (
                                <a href={certificates} target="_blank">
                                    View Certificates & Achievements
                                </a>
                            ) : null}

                            {!userDetails.companyVerified && (
                                <>
                                    <label for="mycertificates">
                                        <div className="button">Upload for Certificates</div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="mycertificates"
                                        name="mycertificates"
                                        accept=".pdf"
                                        onChange={(e) => handleAllDocument(e, setCertificates)}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>

                        <div>
                            {addressProof ? (
                                <a href={addressProof} target="_blank">
                                    View Address Proof
                                </a>
                            ) : null}

                            {!userDetails.companyVerified && (
                                <>
                                    <label for="myadressproof">
                                        <div className="button">Upload for Address Proof</div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="myadressproof"
                                        name="myadressproof"
                                        accept=".pdf"
                                        onChange={(e) => handleAllDocument(e, setAddressProof)}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>

                        <div>
                            {releaseLetter ? (
                                <a href={releaseLetter} target="_blank">
                                    View Release Letter
                                </a>
                            ) : null}

                            {!userDetails.companyVerified && (
                                <>
                                    <label for="myreleaseletter">
                                        <div className="button">Upload for Release Letter</div>
                                    </label>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id="myreleaseletter"
                                        name="myreleaseletter"
                                        accept=".pdf"
                                        onChange={(e) => handleAllDocument(e, setReleaseLetter)}
                                        disabled={uploadingDoc}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="settingContainer">
                <h3>Personal Information</h3>
                <div className="input-row">
                    <font className="input-label">Name</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">City</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">Description </font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="settingContainer">
                <h3>Contact Information</h3>
                <div className="input-row">
                    <font className="input-label">Phone</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        value={phone ? phone : ""}
                        onChange={(e) => setPhone(parseInt(e.target.value))}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">Email</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            {userDetails.type === 2 && (
                <div className="settingContainer">
                    <h3>Location</h3>
                    <iframe
                        title="Location of Users"
                        src={
                            "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14719.95917800627!2d" +
                            longitude +
                            "!3d" +
                            latitude +
                            "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1654543270593!5m2!1sen!2sin"
                        }
                        loading="lazy"
                        frameBorder={0}
                        style={{ height: 300, margin: 20 }}
                    ></iframe>
                    <button onClick={(e) => handleLocation(e)}>Update Location</button>
                </div>
            )}

{userDetails.type === 1 && <>     
            <div className="settingContainer">
                <h3>Educational Qualifications</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your Educational Qualifications"
                        value={educational}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setEducational(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Professional Qualifications</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your Professional Qualifications"
                        value={professional}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setProfessional(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Certificates & Achievements</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your Certificates & Achievements"
                        value={cna}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setCna(e.target.value)}
                    />
                </div>
            </div>

            <div className="settingContainer">
                <h3>Skill Set</h3>
                <div className="input-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <textarea
                        type="text"
                        placeholder="Describe your Skill Set"
                        value={skills}
                        style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                        rows={15}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                </div>
            </div>
            </>       }

            <div className="settingContainer">
                <h3>Social Links</h3>
                {userDetails.type === 2 && (
                    <>
                        <div className="input-row">
                            <font className="input-label">Website</font>
                            <font>:</font>
                            <input
                                type="text"
                                placeholder="Your Website Link"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>

                        <div className="input-row">
                            <font className="input-label">Facebook</font>
                            <font>:</font>
                            <input
                                type="text"
                                placeholder="Your Facebook Link"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                            />
                        </div>
                        <div className="input-row">
                            <font className="input-label">Twitter</font>
                            <font>:</font>
                            <input
                                type="text"
                                placeholder="Your Twitter Link"
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}
                            />
                        </div>
                        <div className="input-row">
                            <font className="input-label">Instagram</font>
                            <font>:</font>
                            <input
                                type="text"
                                placeholder="Your Instagram Link"
                                value={googleplus}
                                onChange={(e) => setGoogleplus(e.target.value)}
                            />
                        </div>
                    </>
                )}
                <div className="input-row">
                    <font className="input-label">Linkedin</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Linkedin Link"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                </div>
            </div>

            <button
                onClick={(e) => {
                    handleSubmit(e);
                }}
            >
                Save Changes
            </button>
        </div>
    );
}

function Resume(props) {
    const { userDetails } = props;
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [resumeLink, setResumeLink] = useState(userDetails.resume);

    const handleImage = (e) => {
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
                uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                    console.log("File available at", downloadURL);
                    setResumeLink(downloadURL);
                    await updateUserResume(userDetails.uid, downloadURL);
                    setUploading(false);
                });
            }
        );
    };

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                <h3>Upload Resume</h3>
                <br />
                {uploading && (
                    <>
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
                    </>
                )}
                <label for="myfile">
                    <div className="button">Select File</div>
                </label>

                <input
                    style={{ display: "none" }}
                    type="file"
                    id="myfile"
                    name="myfile"
                    accept=".pdf"
                    onChange={handleImage}
                />
            </div>
            <div className="settingContainer">
                {userDetails && userDetails.resume && (
                    <div
                        style={{
                            border: "1px solid rgba(0, 0, 0, 0.3)",
                            height: "calc((40vw - 120px)*1.414)",
                            width: "calc(40vw - 120px)",
                        }}
                    >
                        <iframe
                            title="Resume"
                            src={resumeLink}
                            frameBorder="0"
                            style={{ height: "inherit", width: "inherit" }}
                        ></iframe>
                    </div>
                )}

                {userDetails && !userDetails.resume && <font>Resume not uploaded</font>}
            </div>
        </div>
    );
}

function Manage(props) {
    const { userDetails } = props;
    const [list, setList] = useState(null);
    async function getData() {
        const data = await getAllJobsApplied(userDetails.uid);
        setList(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                {list &&
                    list.map((item, index) => {
                        return (
                            <ApplicantProfile
                                id={item.company_id}
                                description={item.description}
                                key={index}
                                jobid={item.job_id}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

function ManageEmployer(props) {
    const { userDetails } = props;
    const [list, setList] = useState(null);
    async function getData() {
        const data = await getAllJobsPosted(userDetails.uid);
        setList(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                {list &&
                    list.map((item, index) => {
                        return (
                            <JobCard
                                userDetails={userDetails}
                                jobDetails={item}
                                key={index}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

function ApplicantProfile(props) {
    const { id, description, jobid } = props;
    const [userData, setUserData] = useState(null);
    const [jobData, setJobData] = useState(null);

    async function getData() {
        const data = await getuserDetail(id);
        setUserData(data);
        const job = await getJobDetail(jobid);
        setJobData(job);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="applicant-card">
            <div className="profileInfo" style={{ border: "none" }}>
                {!userData && <font>Loading ...</font>}
                {userData && (
                    <>
                        <img src={userData.profileimg} alt="User Profile" />
                        <div className="name">
                            <h3>{userData.name}</h3>
                            <ul>
                                <li>
                                    {userData.description ? (
                                        userData.description
                                    ) : (
                                        <span style={{ color: "#999" }}>Your description</span>
                                    )}
                                </li>
                                <li style={{ listStyle: "inside" }}>
                                    {userData.city ? (
                                        userData.city
                                    ) : (
                                        <span style={{ color: "#999" }}>Your city</span>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <a href={"/jobdetails/" + jobid}>
                            <button>View More</button>
                        </a>
                    </>
                )}
            </div>
            {jobData && (
                <div style={{ padding: 30, paddingTop: 0 }}>
                    <h3>
                        {jobData.title} - {jobData.category}
                    </h3>
                    <p>{jobData.type}</p>
                </div>
            )}
            <div
                className="detail-list-item-content"
                style={{ padding: 30, paddingTop: 0, fontSize: 15, lineHeight: 1.5 }}
            >
                {description}
            </div>
        </div>
    );
}

function JobCard(props) {
    const { jobDetails, userDetails } = props;
    const userData = userDetails;
    const jobData = jobDetails;

    return (
        <div className="applicant-card">
            <div className="profileInfo" style={{ border: "none" }}>
                {!userData && <font>Loading ...</font>}
                {userData && (
                    <>
                        <img src={userData.profileimg} alt="User Profile" />
                        <div className="name">
                            <h3>{userData.name}</h3>
                            <ul>
                                <li>
                                    {userData.description ? (
                                        userData.description
                                    ) : (
                                        <span style={{ color: "#999" }}>Your description</span>
                                    )}
                                </li>
                                <li style={{ listStyle: "inside" }}>
                                    {userData.city ? (
                                        userData.city
                                    ) : (
                                        <span style={{ color: "#999" }}>Your city</span>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <a href={"/jobdetails/" + jobData._id}>
                            <button>View More</button>
                        </a>
                    </>
                )}
            </div>
            {jobData && (
                <div style={{ padding: 30, paddingTop: 0, paddingBottom: 0 }}>
                    <h3>
                        {jobData.title} - {jobData.category}
                    </h3>
                    <p>{jobData.type}</p>
                </div>
            )}
            <div
                className="detail-list-item-content"
                style={{ padding: 30, paddingTop: 0, fontSize: 15, lineHeight: 1.5 }}
            >
                {jobData.description.slice(0, 300)} ...
            </div>
        </div>
    );
}

function ApplicantManageProfile(props) {
    const [userData, setUserData] = useState(null);
    const { id, description } = props;

    async function getData() {
        const data = await getuserDetail(id);
        setUserData(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="applicant-card">
            <div className="profileInfo" style={{ border: "none" }}>
                {!userData && <font>Loading ...</font>}
                {userData && (
                    <>
                        <img src={userData.profileimg} alt="User Profile" />
                        <div className="name">
                            <h3>{userData.name}</h3>
                            <ul>
                                <li>
                                    {userData.description ? (
                                        userData.description
                                    ) : (
                                        <span style={{ color: "#999" }}>Your description</span>
                                    )}
                                </li>
                                <li style={{ listStyle: "inside" }}>
                                    {userData.city ? (
                                        userData.city
                                    ) : (
                                        <span style={{ color: "#999" }}>Your city</span>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <a href={"/profile/" + userData.uid}>
                            <button>View Profile</button>
                        </a>
                    </>
                )}
            </div>
            <div
                className="detail-list-item-content"
                style={{ padding: 30, paddingTop: 0, fontSize: 15, lineHeight: 1.5 }}
            >
                {description}
            </div>
        </div>
    );
}
