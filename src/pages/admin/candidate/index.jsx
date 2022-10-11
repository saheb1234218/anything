import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { deleteUser, getAllUser } from "../../../api"
import {MdLaunch, MdDelete} from "react-icons/md"
import {AiFillEdit, AiOutlineStop} from "react-icons/ai"
import { useNavigate } from "react-router-dom"

function Candidate() {

  const [data, setData] = useState(null)

  const navigate = useNavigate();

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
      <font className={styles.heading}>Candidate List</font>
      <table className={styles.rwdTable}>
    <tbody>
      <tr>
        <th>Name</th>
        <th>UID</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>City</th>
        <th>Description</th>
        <th>Profile</th>
        <th>Actions</th>
      </tr>
      {
        data && data.length > 0 &&
        <>
          {
            data.map((user, index)=>{
              return(
              <tr>
                <td data-th="Name">
                  {user.name}
                </td>
                <td data-th="UID">
                  {user.uid}
                </td>
                <td data-th="Email">
                  {user.email}
                </td>
                <td data-th="Phone Number">
                  {user.phone}
                </td>
                <td data-th="City">
                  {user.city}
                </td>
                <td data-th="Description">
                  {user.description}
                </td>
                <td data-th="Profile">
                  <a href={"/profile/" + user.uid } target="_blank" rel="noreferrer">Go to Profile <MdLaunch/></a>
                </td>
                <td data-th="Actions">
                  <div className={styles.action}>
                    
                    <AiFillEdit className={styles.icon} onClick={(e)=>{ navigate("/admin/edit/"+ user.uid) }}/>
                    <MdDelete className={styles.icon} onClick={(e)=>{ 
                      deleteUser(user.uid).then(()=>{
                        window.location.reload()
                      })
                      
                    }}/>
                  </div>
                </td>
              </tr>
              )
            })
          }
        </>
      }
      
    </tbody>
  </table>
    </div>
    </>
  )
}

export default Candidate