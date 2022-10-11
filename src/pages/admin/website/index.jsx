import styles from "./styles.module.css"

import React, { useEffect, useState } from 'react'
import AdminNavbar from "../../../components/admin-navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"
import {getWebsite, updateWebsite } from "../../../firebase"

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

function Website() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function initialize() {
            const res = await getWebsite()
            console.log(res)
            setData(res)
        setLoading(false)
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className={styles.adminContainer}>
                <font className={styles.heading} style={{ margin: 50 }}>Website & Products</font>

                {
                    !loading && <Setting data={data} />
                }
            </div>
        </>
    )
}

export default Website

function Setting(props) {
    const { data } = props
    console.log(data)
    const [category, setCategory] = useState(data);

    async function handleSubmit() {
        const res = await updateWebsite(category)
        console.log(res);
        if (res) {
            window.location.reload()
        }
    }

    function onChangeField(index, value) {
        let temp = category;
        temp[index] = value;
        setCategory(temp);
    }

    return (
        <div className="rightUserProfile" style={{ width: '80%' }}>

            <div className="settingContainer">
                <h3>Edit Categories</h3>
                <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {0+1}</font>
                            <font>:</font>
                            <select defaultValue={category[0]} onChange={(e) => onChangeField(0, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {1+1}</font>
                            <font>:</font>
                            <select defaultValue={category[1]} onChange={(e) => onChangeField(1, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {2+1}</font>
                            <font>:</font>
                            <select defaultValue={category[2]} onChange={(e) => onChangeField(2, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {3+1}</font>
                            <font>:</font>
                            <select defaultValue={category[3]} onChange={(e) => onChangeField(3, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {4+1}</font>
                            <font>:</font>
                            <select defaultValue={category[4]} onChange={(e) => onChangeField(4, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="input-row" key={(Math.floor(Math.random() * 10000)).toString()}>
                            <font className="input-label">Category {5+1}</font>
                            <font>:</font>
                            <select defaultValue={category[5]} onChange={(e) => onChangeField(5, e.target.value)}>

                                {
                                    categories.map(category => <option value={category}>{category}</option>)
                                }
                            </select>
                        </div>
            </div>

            <button
                onClick={(e) => {
                    handleSubmit(e);
                }}
            >
                Update Category
            </button>
        </div>
    );
}