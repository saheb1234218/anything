import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { getAllUser, getuserDetail, updateUser, verifyUser } from "../../../api"
import { MdLaunch, MdDelete } from "react-icons/md"
import { AiFillEdit, AiOutlineStop } from "react-icons/ai"
import PostJob from "../../postjob/postJob"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"
import { storage } from "../../../firebase"

function Edit() {

    const [data, setData] = useState(null)
    const { id } = useParams();

    async function initialize() {
        const res = await getuserDetail(id)
        console.log(res)
        setData(res)
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className={styles.adminContainer}>
                <font className={styles.heading} >Edit User Profile</font>
                {
                    data &&
                    <Setting userDetails={data} />
                }
            </div>
        </>
    )
}

export default Edit

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

    const [companyDoc, setCompanyDoc] = useState(userDetails.companyDocument);
    const [kycDoc, setKycDoc] = useState(userDetails.kycDocument);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
        const [coinss,setCoins]=useState(userDetails.coins || 0);
    const navigate = useNavigate();

    async function handleSubmit() {
        const coins=Number(coinss)+Number(userDetails.coins);
        const res = await updateUser({
            
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
            coins
    },userDetails.uid);
        console.log(res);
        if (res.status === 200) {
            navigate("/dashboard");
        }
    }

    async function handleLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        },userDetails.uid);
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

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                <h3>Profile Picture</h3>
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
                
<div type="button" className="button mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Issue Coins  <img style={{width:'30px' ,height:'30px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/000/545/896/original/money-coin-vector-icon.jpg"></img>
</div>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add Coins</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Current Coins <img style={{width:'30px' ,height:'30px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/000/545/896/original/money-coin-vector-icon.jpg"></img>{userDetails.coins}</label>
  <input onChange={(e)=>setCoins(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Add number of coins"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
        
      </div>
    </div>
  </div>
</div>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="myfile"
                    name="myfile"
                    accept=".jpg, .png, .jpeg, .jfif, .gif, .bmp, .tif, .tiff|image/*"
                    onChange={handleImage}
                />
            </div>
            {
                userDetails.type===2 &&
                <div className="settingContainer">
                    <h3>
                        Verification
                    </h3>
                    <button onClick={(e) =>{verifyUser(userDetails.uid); window.location.reload();}}>Verify Company</button>
                    <div className="settingObjectContainer">
                        <div>
                            {
                                companyDoc ? <a href={companyDoc} target="_blank">View Document</a> : null
                            }
                            {userDetails.companyVerified &&
                                <font style={{ color: 'green' }}>Company Verified</font>
                            }
                            {!userDetails.companyVerified &&
                                <>
                                    {userDetails.companyDocument ? <font style={{ color: 'orange' }}>Waiting for Verification</font> : <font style={{ color: 'red' }}>Company Not Verified</font>}
                                </>
                            }
                        </div>
                        <div>
                            {
                                kycDoc ? <a href={kycDoc} target="_blank">View Document</a> : null
                            }
                            {userDetails.kycVerified &&
                                <font style={{ color: 'green' }}>KYC Verified</font>
                            }
                            {!userDetails.kycVerified &&
                                <>
                                    {userDetails.kycDocument ? <font style={{ color: 'orange' }}>Waiting for Verification</font> : <font style={{ color: 'red' }}>KYC Not Verified</font>}
                                </>
                            }


                        </div>

                    </div>

                </div>
            }
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
                    <font className="input-label">Description</font>
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
            <div className="settingContainer">
                <h3>Social Links</h3>
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
                    <font className="input-label">Linkedin</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Your Linkedin Link"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
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