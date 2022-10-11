import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import "./common.css";

import Bar from './Bar';

export default function Work(props) {

  const [workyear,setWorkyear]=useState("");
  const [workmonth,setWorkmonth]=useState("");
  const [comp,setComp]=useState("");
  const [jobtitle,setJobtitle]=useState("");
  const [city,setCity]=useState("");
  const [salary,setSalary]=useState("");


  const submit=()=>{
    const obj={
      "yoe": workyear+workmonth,
      "companyName": comp,
      "jobTitle":jobtitle,
      "jobCity": city,
      "salary":salary
    }
    localStorage.setItem("work",JSON.stringify(obj));
    props.next();
  }

  return (
    <>
      <div className='container w-100 mt-5'>
        <div className="row">
          <div className="col-lg-4 col-xs-12 d-none d-sm-block">
            <Bar part={2} />
          </div>
          <div className="col-lg-8 col-xs-12">
            <h2>Add your Employment</h2>
            <span style={{ color: 'grey' }}>Employment details help recuiters understand your background</span>

            <div class="mb-3 mt-4 d-flex flex-column ">
              <label for="formGroupExampleInput2" class="label">Are you currently employed?</label>
              <div className="d-flex flex-row gap-4 mt-3">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">Yes</label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault">No</label>
                </div>
              </div>

            </div>

            <div className="mb-3 mt-4">
              <label for="formGroupExampleInput2" class="label">Total Work Experience</label>
              <div className="d-flex flex-row gap-4 mt-2">
                <select class="form-select w-25" onChange={(e)=>setWorkyear(e.target.value)} aria-label="Default select example">
                  <option selected>Years</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Year</option>
                  <option value="3">3 Year</option>
                  <option value="More than 3">More than 3 Years</option>
                </select>

                <select class="form-select w-25" onChange={(e)=>setWorkmonth(e.target.value)} aria-label="Default select example">
                  <option selected>Months</option>
                  <option value="1">1 Month</option>
                  <option value="2">2 Months</option>
                  <option value="3">3 Months</option>
                  <option value="4">4 Months</option>
                  <option value="5">5 Months</option>
                  <option value="6">6 Months</option>
                  <option value="7">7 Months</option>
                  <option value="8">8 Months</option>
                  <option value="9">9 Months</option>
                  <option value="10">10 Months</option>
                  <option value="11">11 Months</option>
                  <option value="12">12 Months</option>
                </select>

              </div>
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">Previous Company</label>
              <input onChange={(e)=>setComp(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Eg. Amazon" />
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">Previous Job Title
              </label>
              <input onChange={(e)=>setJobtitle(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Eg. Software Engineer" />
            </div>

            <div className="mb-3 w-75 mt-4">
              <label for="formGroupExampleInput" class="label">Current City</label>
              <input onChange={(e)=>setCity(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Mention the city you live in" />
            </div>



            <div class="mb-3 mt-2 w-75">
              <label class="label" for="autoSizingInputGroup">Annual Salary</label>
              <div class="input-group">
                <div class="input-group-text">Rs.</div>
                <input onChange={(e)=>setSalary(e.target.value)} type="text" class="form-control" id="autoSizingInputGroup" placeholder="Eg. 6,64,000" />
              </div>

            </div>

            <a  className="btn btn-primary w-25 text-light mt-2 pl-5" onClick={submit}>Save and Continue</a>


          </div>
        </div>




      </div>

    </>
  );
}
