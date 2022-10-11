import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faBriefcase,
    faInfo,
    faMailBulk,
    faEarth,
} from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import { getuserDetail } from "../../api";
import Footer from "../../components/footer/Footer";
import styles from "../jobdetails/JobDetails.module.css"

export default function Profile() {
    const [userData, setUserData] = useState();
    const { id } = useParams();
    const section = ""
    console.log(section);

    async function getData() {
        const data = await getuserDetail(id);
        setUserData(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="userPage">
            <Navbar />
            {userData &&
                <section className="userProfile">
                    <div className="leftUserProfile">
                        <div className="image">
                            <img src={userData.profileimg} alt="User Profile" />
                        </div>
                        <div className="intro">
                            <p>{userData.name}</p>
                            <p>{userData.email}</p>
                        </div>
                        <div className="profileList">
                            <ul>
                                <li>

                                    <FontAwesomeIcon
                                        icon={faBriefcase}
                                        color="#0C222C"
                                        fontSize={24}
                                        style={{ width: 40 }}
                                    />
                                    <div style={{ marginLeft: 10 }}>
                                        <font style={{ fontSize: 16 }}>Description:</font><br />
                                        <font>{userData.description}</font>
                                    </div>

                                </li>

                                <li>

                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        color="#0C222C"
                                        fontSize={24}
                                        style={{ width: 40 }}
                                    />
                                    <div style={{ marginLeft: 10 }}>
                                        <font style={{ fontSize: 16 }}>Location:</font><br />
                                        <font>{userData.city}</font>
                                    </div>

                                </li>

                                <li>

                                    <FontAwesomeIcon
                                        icon={faInfo}
                                        color="#0C222C"
                                        fontSize={24}
                                        style={{ width: 40 }}
                                    />
                                    <div style={{ marginLeft: 10 }}>
                                        <font style={{ fontSize: 16 }}>Phone:</font><br />
                                        <font>{userData.phone}</font>
                                    </div>

                                </li>

                                <li>

                                    <FontAwesomeIcon
                                        icon={faMailBulk}
                                        color="#0C222C"
                                        fontSize={24}
                                        style={{ width: 40 }}
                                    />
                                    <div style={{ marginLeft: 10 }}>
                                        <font style={{ fontSize: 16 }}>Email:</font><br />
                                        <font>{userData.email}</font>
                                    </div>

                                </li>

                                <li>

                                    <FontAwesomeIcon
                                        icon={faEarth}
                                        color="#0C222C"
                                        fontSize={24}
                                        style={{ width: 40 }}
                                    />
                                    <div style={{ marginLeft: 10 }}>
                                        <font style={{ fontSize: 16 }}>Website:</font><br />
                                        <font>{userData.website}</font>
                                    </div>

                                </li>

                            </ul>
                        </div>
                    </div>


                    <Resume userDetails={userData} />

                    
                </section>
            }

            <Footer />
        </div>
    );
}

function Resume(props) {
    const { userDetails } = props;

    return (
        <div className="rightUserProfile">
            <div className="settingContainer">
                <h3>Resume</h3><br />
                {(userDetails && userDetails.resume) &&
                    <div
                        className={styles.item_pdf}

                    >
                        <iframe title="Resume" src={userDetails.resume} frameBorder="0" style={{ height: 'inherit', width: 'inherit' }}></iframe>
                    </div>
                }

                {
                    (userDetails && !userDetails.resume) &&
                    <font>Resume not uploaded</font>
                }
            </div>
            <div className={styles.detail_list_item}>
                        <font className={styles.detail_list_item_title}>
                            Educational Qualifications
                        </font>
                        <font className={styles.detail_list_item_content}>
                            {userDetails.educational}
                        </font>
                    </div>
                    <div className={styles.detail_list_item}>
                        <font className={styles.detail_list_item_title}>
                            Professional Qualifications
                        </font>
                        <font className={styles.detail_list_item_content}>
                            {userDetails.professional}
                        </font>
                    </div>
                    <div className={styles.detail_list_item}>
                        <font className={styles.detail_list_item_title}>
                            Certificates & Achievements
                        </font>
                        <font className={styles.detail_list_item_content}>
                            {userDetails.cna}
                        </font>
                    </div>
                    <div className={styles.detail_list_item}>
                        <font className={styles.detail_list_item_title}>
                            Skill Set
                        </font>
                        <font className={styles.detail_list_item_content}>
                            {userDetails.skills}
                        </font>
                    </div>
        </div>
    )
}
