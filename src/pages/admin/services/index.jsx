import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { deleteJob, getAllUser, getuserDetail, updateUser } from "../../../api"
import { MdLaunch, MdDelete } from "react-icons/md"
import { AiFillEdit, AiOutlineStop } from "react-icons/ai"
import PostJob from "../../postjob/postJob"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"
import { addServices, deleteService, getServiceDetails, getServices, storage } from "../../../firebase"

function Services() {

    const [data, setData] = useState({
        name: "",
        price: "",
        points: [
            {
                id: 0,
                text: ""
            },
            {
                id: 1,
                text: ""
            },
        ]
    })
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    async function initialize() {
        if(id){
        const res = await getServiceDetails(id)
        console.log(res)
        setData(res)
    }
        setLoading(false)
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className={styles.adminContainer}>
                <font className={styles.heading} style={{margin: 50}}>Services & Products</font>

                    {
                        !loading && <Setting data={data} />
                    }
                    
                    <Table />
            </div>
        </>
    )
}

export default Services

function Table(props) {
    const [data, setData] = useState(null)

    async function initialize() {
        const res = await getServices();
        console.log(res)
        if (res) {
            setData(res)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <>
            <div className={styles.adminContainer}>
            <font className={styles.heading} style={{margin: 50}}>Services & Products List</font>
                <table className={styles.rwdTable}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        {
                            data && data.length > 0 &&
                            <>
                                {
                                    data.map((item, index) => {
                                        return (<Rows item={item} key={index} />)
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


function Rows(props) {
    const { item } = props

    return (
        <tr>
            <td data-th="ID">
                {item.id}
            </td>
            <td data-th="Name">
                {item.name}
            </td>
            <td data-th="Price">
                {item.price}
            </td>

            <td data-th="Actions">
                <div className={styles.action}>
                    <a href={"/admin/services/" + item.id}><AiFillEdit className={styles.icon} /></a>

                    <MdDelete className={styles.icon} onClick={(e) => {
                        deleteService(item.id).then(() => {
                            window.location.reload()
                        })
                    }} />
                </div>
            </td>
        </tr>
    )
}

function Setting(props) {
    const {data} = props
    console.log(data)
    const [name, setName] = useState(data.name);
    const [price, setPrice] = useState(data.price);
    const [points, setPoints] = useState(data.points);

    async function handleSubmit() {
        const res = await addServices(name, price, points)
        console.log(res);
        if (res) {
            window.location.reload()
        }
    }

    

    return (
        <div className="rightUserProfile" style={{width: '80%'}}>

            <div className="settingContainer">
                <h3>Create New Service / Product / Plan</h3>
                <div className="input-row">
                    <font className="input-label">Name</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Service / Product / Plan Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <font className="input-label">Price</font>
                    <font>:</font>
                    <input
                        type="text"
                        placeholder="Price of the product"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="input-row" style={{alignItems: 'flex-start'}}>
                    <font className="input-label" style={{marginTop: 10}}>Points</font>
                    <font style={{marginTop: 10}}>:</font>
                    <div className="input-column">
                    {

                        points.map(item=>
                                <input
                                    type="text"
                                    placeholder={"Add Details"}
                                    value={item.text}
                                    style={{marginBottom: 20}}
                                    onChange={(e) => {
                                        let temp = [...points]
                                        temp[item.id].text = e.target.value
                                        setPoints(temp)
                                        console.log(points);
                                    }}
                                />
                            
                        )
                    }
                    <button onClick={(e) => {
                                        let temp = [...points]
                                        temp.push({
                                            id: points.length,
                                            text: ""
                                        },)
                                        setPoints(temp)
                                    }}>Add Point</button>
                    </div>
                </div>
            </div>

            <button
                onClick={(e) => {
                    handleSubmit(e);
                }}
            >
                Create
            </button>
        </div>
    );
}