import React from 'react'
import styles from './styles.module.css'
import {FaUserAlt, FaHospitalUser, FaThList} from "react-icons/fa"
import {AiFillFileAdd } from "react-icons/ai"
import {GrPlan, GrCloudComputer, GrPowerShutdown} from "react-icons/gr"
import {BiWorld} from "react-icons/bi"
import { useAuth } from '../../contexts/AuthContext'



function AdminNavbar() {
  const {logout } = useAuth();
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a href={"/admin/"} className={styles.navItem}>
            <FaUserAlt className={styles.icon}/>
            <font className={styles.desc}>Candidates</font>
          </a>
          <a href={"/admin/employer"} className={styles.navItem}>
            <FaHospitalUser className={styles.icon}/>
            <font className={styles.desc}>Employers</font>
          </a>
          <a href={"/admin/post"} className={styles.navItem}>
            <AiFillFileAdd className={styles.icon}/>
            <font className={styles.desc}>Create Jobs</font>
          </a>
          <a href={"/admin/jobs"} className={styles.navItem}>
            <FaThList className={styles.icon}/>
            <font className={styles.desc}>Jobs</font>
          </a>
          <a href={"/admin/services/"} className={styles.navItem}>
            <GrPlan className={styles.icon}/>
            <font className={styles.desc}>Products & Services</font>
          </a>
          <a href={"/admin/website/"} className={styles.navItem}>
            <GrCloudComputer className={styles.icon}/>
            <font className={styles.desc}>Edit Website</font>
          </a>
          <a href={"#"} onClick={(e)=>{logout()}} className={styles.navItem}>
            <GrPowerShutdown className={styles.icon}/>
            <font className={styles.desc}>Log Out</font>
          </a>
        </div>
    </div>
  )
}

export default AdminNavbar