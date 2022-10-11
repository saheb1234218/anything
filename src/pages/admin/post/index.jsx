import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { getAllUser } from "../../../api"
import {MdLaunch, MdDelete} from "react-icons/md"
import {AiFillEdit, AiOutlineStop} from "react-icons/ai"
import PostJob from "../../postjob/postJob"

function Post() {

  const [data, setData] = useState(null)

  async function initialize(){
    const res = await getAllUser()
    console.log(res)
    if(res){
      const users = res.user
      const query = users.filter(user => user.type === 1)
      console.log(query)
      setData(query)
    }
  }

  useEffect(() => {
   initialize()
  }, [])
  
  return (
    <>
    <AdminNavbar/>
    <div className={styles.adminContainer}>
    <font className={styles.heading} style={{marginBottom: -50}}>Create a Job</font>
      <PostJob/>
    </div>
    </>
  )
}

export default Post