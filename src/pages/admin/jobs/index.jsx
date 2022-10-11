import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { deleteJob, getJobs, getuserDetail } from "../../../api"
import { MdDelete} from "react-icons/md"
import {AiFillEdit, AiOutlineStop} from "react-icons/ai"

function Jobs() {

  const [data, setData] = useState(null)
  // eslint-disable-next-line
  const [category, setCategory] = useState("");
  // eslint-disable-next-line
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  // eslint-disable-next-line
  const [page, setPage] = useState(1);

  async function initialize(){
    const res = await getJobs(page, category, sort, search);
    console.log(res)
    if(res){
      setData(res)
    }
  }

  useEffect(() => {
   initialize()
  }, [])
  
  return (
    <>
    <AdminNavbar/>
    <div className={styles.adminContainer}>
      <font className={styles.heading}>Jobs List</font>
      <table className={styles.rwdTable}>
    <tbody>
      <tr>
        <th>Title</th>
        <th>ID</th>
        <th>Company</th>
        <th>Type</th>
        <th>Salary</th>
        <th>Weekly Hours</th>
        <th>Actions</th>
      </tr>
      {
        data && data.length > 0 &&
        <>
          {
            data.map((job, index)=>{
              return(<Rows job={job} key={index} />)
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

export default Jobs

function Rows(props){
  const{job} = props
  const [data, setData] = useState(null)

  async function initialize(){
    const res = await getuserDetail(job.company_id)
    console.log(res)
    setData(res)
  }

  useEffect(() => {
    initialize()
  })
  return(
    <tr>
      <td data-th="Title">
        {job.title}
      </td>
      <td data-th="ID">
        {job._id}
      </td>
      <td data-th="Company">
        {data ? data.name : ""}
      </td>
      <td data-th="Type">
        {job.type}
      </td>
      <td data-th="Salary">
        {job.salary.$numberDecimal}
      </td>
      <td data-th="Weekly hours">
        {job.hoursperweek}
      </td>
      <td data-th="Actions">
        <div className={styles.action}>
          <a href={"/admin/post/"+ job._id}><AiFillEdit className={styles.icon}/></a>
          
          <MdDelete className={styles.icon}  onClick={(e)=>{ 
                      deleteJob(job._id).then(()=>{
                        window.location.reload()
                      })
                    }}/>
        </div>
      </td>
    </tr>
    )
}