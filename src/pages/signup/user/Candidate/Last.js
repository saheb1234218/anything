import React, { useState } from 'react'
import { useAuth } from '../../../../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';
import "./common.css";

import Bar from './Bar';

export default function Last(props) {

    const { signup } = useAuth();
    const navigate = useNavigate()

const submit=async()=>{
    var basic = JSON.parse(localStorage.getItem('basic'));
    var work = JSON.parse(localStorage.getItem('work'));
    var education = JSON.parse(localStorage.getItem('education'));
    //console.log(basic,work,education)
    var obj={
        "name": basic.name,
        "type": "1",
      "experience": basic.experience,
      "phone":basic.phone,
      "email": basic.email,
      "password":basic.password,
      "yoe": work.yoe,
      "companyName": work.companyName,
      "jobTitle":work.jobTitle,
      "jobCity": work.jobCity,
      "salary":work.salary,
      "Qual": education.Qual,
      "Course": education.Course,
      "skills":education.specialization,
      "university": education.university,
      "courseType":education.courseType,
      "courseyear": education.courseyear
    }
    console.log(obj);
    const x=await signup(obj);
  console.log(x.data);
  if(x.data===undefined)
  {
    alert(`${x.error}`)
  }
  navigate("/dashboard/setting");
}



    return (
        <>
            <div className='container w-100 mt-5'>
                <div className="row">
                    <div className="col-lg-4 col-xs-12 d-none d-sm-block">
                        <Bar part={4} />
                    </div>
                    <div className="col-lg-8 col-xs-12 d-flex align-items-center">

                    <div class="card shadow pt-2 d-flex justify-content-center align-items-center" style={{width: '70%',height:'75%'}}>
  <img src="https://th.bing.com/th/id/R.82ce8924924da8e507cbbaade2342ff9?rik=WcOn1VvXYBneHA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f1%2fv%2fi%2fA%2fI%2fk%2fcomplete-check-hi.png&ehk=WvTAB3ckLo8Oqsiqqr4hdjdPzecsGcrEAt9JMErlMjs%3d&risl=&pid=ImgRaw&r=0" style={{width:'220px'}} class="card-img-top" alt="..."/>
  <div class="card-body d-flex justify-content-center align-items-center flex-column">
    <h5 class="card-title">All Good to Go</h5>
    <p class="card-text">Start your hiring journey by clicking on submit! </p>
    <a href="#" onClick={submit} class="btn btn-primary">Submit</a>
  </div>
</div>
                    </div>
                </div>




            </div>

        </>
    );
}
