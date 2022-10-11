import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import "./common.css";

import Bar from './Bar';

export default function Education(props) {

  const [qual,setQual]=useState("");
  const [course,setCourse]=useState("");
  const [spez,setSpez]=useState("");
  const [univ,setUniv]=useState("");
  const [ctype,setCtype]=useState("");
  const [year,setYear]=useState("Choose your passing year");

  const submit=()=>{
    const obj={
      "Qual": qual,
      "Course": course,
      "specialization":spez,
      "university": univ,
      "courseType":ctype,
      "courseyear": year
    }
    localStorage.setItem("education",JSON.stringify(obj));
    props.next();
  }

  return (
    <>
      <div className='container w-100 mt-5'>
        <div className="row">
          <div className="col-lg-4 col-xs-12 d-none d-sm-block">
            <Bar part={3}/>
          </div>
          <div className="col-8 col-xs-12">
            <h2>Mention your education</h2>
            <span style={{ color: 'grey' }}>Adding your educational details will help recruiters know your value as a potential candidate</span>

            

            <div className="mb-3 mt-4">
              <label for="formGroupExampleInput2" class="label">Highest Qualification</label>
              <div className="d-flex flex-row gap-4 mt-2">
                <select onChange={(e)=>setQual(e.target.value)} class="form-select w-50" aria-label="Default select example">
                  <option selected>Select Your Qualification</option>
                  <option value="1">Doctorate/PhD</option>
                  <option value="2">Masters/Post-Graduation</option>
                  <option value="3">Graduation/Diploma</option>
                  
                </select>

                

              </div>
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">Course</label>
              <input onChange={(e)=>setCourse(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Eg. B.Tech" />
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">Specialization
              </label>
              <input onChange={(e)=>setSpez(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Eg. Data Analytics" />
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">University / Institute</label>
              <input onChange={(e)=>setUniv(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Eg. Calcutta University" />
            </div>



            <div class="mb-3 mt-4 d-flex flex-column ">
              <label for="formGroupExampleInput2" class="label">Course Type</label>
              <div className="d-flex flex-row gap-4 mt-1">
                <div class="form-check form-switch">
                  <input class="form-check-input" onChange={(e)=>setCtype("Full Time")} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">Full Time</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" onChange={(e)=>setCtype("Part Time")} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">Part Time</label>
                </div>
              </div>

            </div>

            <div className="mb-3 d-flex flex-column w-75">
                <label for="formGroupExampleInput" class="label">Passing Year</label>
              <input  value={year} type="text" class="form-control" id="formGroupExampleInput" disabled  placeholder={year} /> 
                <div className="d-flex flex-row gap-2 mt-3 ">
                    <a onClick={(e)=>setYear("2020")} className='choose'>2020</a>
                    <a onClick={(e)=>setYear("2021")} className='choose'>2021</a>
                    <a onClick={(e)=>setYear("2022")} className='choose'>2022</a>
                    <a onClick={(e)=>setYear("2023")} className='choose'>2023</a>
                </div>
            </div>

            <a  className="btn btn-primary w-25 text-light mt-2 pl-5" onClick={submit}>Save and Continue</a>


          </div>
        </div>




      </div>

    </>
  );
}
