import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHeart,
  faBriefcase,
  faInfo,
  faMailBulk,
  faPerson,
  faEarth,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./JobDetails.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { getAllApplicant, getJobDetail, getuserDetail, postApplication, postNotification } from "../../api";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";

export default function JobDetails() {
  const { userDetails, currentUser } = useAuth();
  const [jobDetails, setJobDetails] = useState(null);
  const [employerDetails, setEmployerDetails] = useState(null);
  const [applicantDetails, setApplicantDetails] = useState(null)
  const [description, setDescription] = useState("")
  const [show, setShow] = useState(false)
  const [apply, setApply] = useState(false)
  const { jobid } = useParams();
  const textareaRef = useRef();

  async function getData(id) {
    if (id) {
      const jobData = await getJobDetail(id);
      setJobDetails(jobData);
      const employerData = await getuserDetail(jobData.company_id);
      setEmployerDetails(employerData);
      const applicantData = await getAllApplicant(jobid)
      let c = 0;
      applicantData.forEach((data) => {
        if (data.applicant_id === userDetails.uid) {
          c++;
        }
      })
      console.log(c)
      if (c > 0) {
        setApply(false)
      } else {
        setApply(true)
      }
      setApplicantDetails(applicantData)
    }
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  useEffect(() => {
    console.log(jobid);
    getData(jobid);
    // eslint-disable-next-line
  }, [jobid]);

  async function handleSubmit() {
    const applicant_id = userDetails.uid

    const res = await postApplication(applicant_id, jobid, description, jobDetails.company_id)
    await postNotification(applicant_id, "Successfully applied to " + jobDetails.title)
    await postNotification(jobDetails.company_id, "Received a new application on " + jobDetails.title )
    console.log(res)
    if (res.status === 200) {
      setShow(false)
      alert("Job application successfully submitted");
      window.location.reload();
    }
  }


  if (jobDetails && employerDetails) {
    console.log(jobDetails.createdAt)
    const date = new Date(jobDetails.createdAt)
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
      <div className={styles.jobList}>
        <Navbar className="navbar" />

        <div className={styles.mainContainer}>
          <div className={styles.details}>
            <div className={styles.detail_box}>
              <div className={styles.detail_box_header}>Job Overview</div>
              <div className={styles.detail_box_brief}>
                <img src={employerDetails.profileimg} style={{ height: '12vw', width: '12vw', marginBottom: 20 }} alt="" />
                <font className={styles.detail_brief_jobname}>
                  {" "}
                  {jobDetails.title} ({jobDetails.minexp.$numberDecimal} Yrs Exp)
                </font>
                <font className={styles.detail_brief_company}>
                  {" "}
                  {employerDetails.name}{" "}
                </font>
                <div className={styles.detail_brief_action}>
                  <div className={styles.save}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#0C222C"
                      fontSize={16}
                    />
                  </div>
                  <div className={styles.type}> {jobDetails.type} </div>
                </div>
              </div>

              <div className={styles.detail_box_info}>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Date Posted:</font>
                    <font>{month[date.getMonth()]} {padTo2Digits(date.getDate())}, {date.getFullYear()}</font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Location:</font>
                    <font>{employerDetails.city}</font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faInfo}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Job Title:</font>
                    <font>{jobDetails.title}</font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Hours:</font>
                    <font>{jobDetails.hoursperweek}h / Week</font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faPerson}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Salary:</font>
                    <font>
                      {jobDetails.salarycurrency}{" "}
                      {jobDetails.salary.$numberDecimal} P.A.
                    </font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faEarth}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Category:</font>
                    <font>{jobDetails.category}</font>
                  </div>
                </div>
                <div className={styles.detail_box_info_item}>
                  <FontAwesomeIcon
                    icon={faEarth}
                    color="#0C222C"
                    fontSize={18}
                    style={{ width: 40 }}
                  />
                  <div>
                    <font>Experience:</font>
                    <font>
                      {jobDetails.minexp.$numberDecimal}-
                      {jobDetails.maxexp.$numberDecimal} Years Experience
                    </font>
                  </div>
                </div>
              </div>

              <button className={styles.detail_box_viewall} onClick={(e) => {
                if (!currentUser) {
                  alert("Please login to continue")
                } else if (userDetails && userDetails.type === 2) {
                  alert("Employer cannot apply for Jobs")
                } else if (!apply) {
                  alert("You've already applied for this job")
                } else {

                  setShow(true)
                  setTimeout(() => {
                    if (textareaRef.current) textareaRef.current.focus();
                  }, 100);
                }

              }}>

                <font>{apply ? "Apply Now" : "Applied"}</font>


              </button>
  
            </div>
          </div>
          <div className={styles.list}>

            {(currentUser && jobDetails.company_id === userDetails.uid) &&
              <div className={styles.detail_list_item} style={{ marginBottom: 20 }}>
                <font className={styles.detail_list_item_title}>Applicants</font>
                <div className={styles.detail_list_item_list}>
                  {applicantDetails &&
                    applicantDetails.map((data, index) => {
                      return (
                        <ApplicantProfile id={data.applicant_id} description={data.description} key={index} />
                      )
                    })
                  }

                  {
                    !applicantDetails &&
                    <div>Loading ...</div>
                  }

                  {
                    (applicantDetails && applicantDetails.length === 0) &&
                    <div>No Applications Yet</div>
                  }

                </div>
              </div>
            }

            <div className={styles.detail_list_item}>
              <font className={styles.detail_list_item_title}>Job Description</font>
              <font className={styles.detail_list_item_content}>
                {jobDetails.description}
              </font>
            </div>

            <div className={styles.detail_list_item}>
              <font className={styles.detail_list_item_title}>Responsibities</font>
              <font className={styles.detail_list_item_content}>
                {jobDetails.responsibilities}
              </font>
            </div>

            <div className={styles.detail_list_item}>
              <font className={styles.detail_list_item_title}>
                Minimum Qualifications
              </font>
              <font className={styles.detail_list_item_content}>
                {jobDetails.qualifications}
              </font>
            </div>

            <div className={styles.detail_list_item}>
              <font className={styles.detail_list_item_title}>How To Apply</font>
              <font className={styles.detail_list_item_content}>
                {jobDetails.procedure}
              </font>
            </div>
          </div>
        </div>

        <div className={styles.apply_container} style={{ display: show ? 'flex' : 'none' }}>
          <div className={styles.apply_box} onKeyDown={(e) => {
            console.log(e.key)
            if (e.key === "Escape") {
              setShow(false)
            }
          }}>
            <h3>Why should we choose you ? </h3><br />
            <div className={styles.input_row} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <textarea
                type="text"
                placeholder="Describe briefly ..."
                ref={textareaRef}
                value={description}
                style={{ width: '100%', height: 'auto', borderRadius: 10, marginLeft: 0, padding: 30, marginBottom: 20 }}
                rows={15}
                onChange={(e) => setDescription(e.target.value)}
                
              />
            </div>
            <button onClick={(e) => handleSubmit(e)}>Apply</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          height: '100vh',
          width: '100vw'
        }}
      >
        {" "}
        Loading ...
        <Footer />
      </div>
    );
  }
}


function ApplicantProfile(props) {
  const [userData, setUserData] = useState(null)
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
    <div className={styles.applicant_card}>
  
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
  )
}