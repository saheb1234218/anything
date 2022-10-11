import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCreditCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./JobList.module.css";
import { getJobs, getuserDetail } from "../../api";
import Footer from "../../components/footer/Footer";
import { useSearchParams } from "react-router-dom";
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

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

const skills = ["Written and verbal communication", " Customer service", " Interpersonal skills", " Document management", " Microsoft Office skills", " Job-specific software ", "Event coordination ", "Organization", " Web Development ", "UI/UX Designer",]

const cities = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai", "Lucknow"]

export default function JobList() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  console.log(searchParams.get("category"), searchParams.get("search"), searchParams.get("location"), searchParams.get("skill"))
  // eslint-disable-next-line
  const [category, setCategory] = useState(searchParams ? searchParams.get("category") : "");
  // eslint-disable-next-line
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState(searchParams ? searchParams.get("search") : "");
  // eslint-disable-next-line
  const [breakpoint, setBreakpoint] = useState(20);
  // eslint-disable-next-line
  const [location, setLocation] = useState(searchParams ? searchParams.get("location") : "");
  // eslint-disable-next-line
  const [skill, setSkill] = useState(searchParams ? searchParams.get("skill") : "")
  // eslint-disable-next-line
  const [currentPosition, setCurrentPosition] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false)

  useEffect(() => {
    const getJobsData = async () => {
      const a = parseInt(currentPosition / breakpoint) + 1;
      const res = await getJobs(
        a,
        breakpoint,
        sort,
        search,
        category,
        location,
        skill,
      );
      console.log(res);
      setJobs(res);
    };
    getJobsData();
  }, [category, sort, search, breakpoint, currentPosition, location, skill]);

  function searchJobs() {
    setSearch(searchTerm);
  }

  return (
    <div className={styles.jobList}>
      <Navbar className={styles.navbar} />

      <div className={styles.mainContainer}>
        <div className={styles.filters} style={{display: show ? 'flex' : 'none'}}>
          <div className={styles.filter_box}>
            <div className={styles.filter_box_header}>Job By Category</div>
            <br /><br />
            <div className={styles.filter_box_list}>
              {
                categories.map(category => {
                  return (
                    <div className={styles.filter_box_item}>
                      <input type="checkbox" id={category} name={category} value={category} onChange={e => {
                        if (e.target.checked) {
                          setCategory(e.target.value)
                        } else {
                          setCategory("")
                        }
                      }} />
                      <label for={category}>{category}</label>
                    </div>
                  )
                })
              }
              <div className={styles.filter_box_item}>
                <input type="checkbox" id={"Others"} name={"Others"} value={"Others"} onChange={e => {
                  if (e.target.checked) {
                    setCategory(e.target.value)
                  } else {
                    setCategory("")
                  }
                }} />
                <label for={"Others"}>{"Others"}</label>
                <br />
              </div>
            </div>
            <br /><br />
          </div>
          <div className={styles.filter_box}>
            <div className={styles.filter_box_header}>Job By Location</div>
            <br /><br />
            <div className={styles.filter_box_list}>
              {
                cities.map(category => {
                  return (
                    <div className={styles.filter_box_item}>
                      <input type="checkbox" id={category} name={category} value={category} onChange={e => {
                        if (e.target.checked) {
                          setLocation(e.target.value)
                        } else {
                          setLocation("")
                        }
                      }} />
                      <label for={category}>{category}</label>
                      <br />
                    </div>
                  )
                })
              }
              <div className={styles.filter_box_item}>
                <input type="checkbox" id={"Others"} name={"Others"} value={"Others"} onChange={e => setLocation("")} />
                <label for={"Others"}>{"Others"}</label>
                <br /></div>
            </div>
            <br /><br />
          </div>
          <div className={styles.filter_box}>
            <div className={styles.filter_box_header}>Your Skills</div>
            <br /><br />
            <div className={styles.filter_box_list}>
              {
                skills.map(category => {
                  return (
                    <div className={styles.filter_box_item}>
                      <input type="checkbox" id={category} name={category} value={category} onChange={e => {
                        if (e.target.checked) {
                          setSkill(e.target.value)
                        } else {
                          setSkill("")
                        }
                      }} />
                      <label for={category}>{category}</label>
                      <br />
                    </div>
                  )
                })
              }
              <div className={styles.filter_box_item}>
                <input type="checkbox" id={"Others"} name={"Others"} value={"Others"} onChange={e => {
                  if (e.target.checked) {
                    setSkill(e.target.value)
                  } else {
                    setSkill("")
                  }
                }} />
                <label for={"Others"}>{"Others"}</label>
                <br />
              </div>
            </div>
            <br /><br />
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_search}>
            <div className={styles.list_search_box}>
              <input
                type="text"
                placeholder="Search For Jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchJobs();
                  }
                }}
              />
              <button
                style={{ backgroundImage: "none" }}
                onClick={(e) => searchJobs()}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  color="#0C222C"
                  fontSize={20}
                />
              </button>
            </div>
            <button className={styles.filterButtons} onClick={e =>setShow(!show)}>{show ? "Hide":"Show"} Filters</button>
            {/* <select>
              <option value="null">Sort By</option>
              <option value="Relevance">Relevance</option>
              <option value="Date Issued">Date Issued</option>
              <option value="Job Type">Job Type</option>
            </select> */}
            <font>
              Viewing {currentPosition} - {currentPosition + breakpoint}
            </font>
          </div>

          {jobs.length > 0 &&
            jobs.map((job, i) => {
              return <JobCard details={job} key={i} />;
            })}
            <Pagination currentPosition={currentPosition} breakpoint={breakpoint} setCurrentPosition={setCurrentPosition} setBreakpoint={setBreakpoint} length={1000} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function JobCard(props) {
  const { details } = props;
  const [employer, setEmployer] = useState(null);

  const getEmployers = async () => {
    const res = await getuserDetail(details.company_id);
    console.log(res);
    setEmployer(res);
  };
  useEffect(() => {
    getEmployers();
    // eslint-disable-next-line
  }, []);

  return (
    <a href={"/jobdetails/" + details._id}>
      <div className={styles.list_item}>
        <div className={styles.list_item_info}>
          <img
            src={
              employer
                ? employer.profileimg
                : "https://firebasestorage.googleapis.com/v0/b/job-portal-7ac8b.appspot.com/o/profile%2Fuser.png?alt=media&token=d6c7b4aa-c210-4e8a-8c72-0c4b42041b19"
            }
            alt="Company Logo"
          />
          <div className={styles.info}>
            <font>
              {details.title}, ({details.category})
            </font>
            <br />
            <font>{employer ? employer.name : ""}</font>
            <div className={styles.currency}>
              <FontAwesomeIcon
                icon={faCreditCard}
                color="#0C222C"
                fontSize={13}
                style={{ width: 20 }}
              />
              <font>
                {details.salarycurrency} {details.salary.$numberDecimal} P.A.
              </font>
            </div>
            <div className={styles.currency}>
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#0C222C"
                fontSize={13}
                style={{ width: 20 }}
              />
              <font>{details.city}</font>
            </div>
          </div>
        </div>
        <div className={styles.item_details}>
          <div className={styles.job_type}>{details.type}</div>
          <div className={styles.apply}> Not Applied </div>
        </div>
      </div>
    </a>
  );
}


function Pagination(props){
  const {currentPosition, breakpoint, setCurrentPosition, setBreakpoint, length} = props;

  const units = Math.ceil(length/breakpoint)-1;
  const currentPosIndex = Math.floor(currentPosition/breakpoint);

  return (
      <div className="pagination-container">
          <button className="pagination-item" style={{display: 'block'}} onClick={e => {
              if(currentPosIndex > 0){
                  setCurrentPosition(currentPosition - breakpoint)
              }
              }}><IoIosArrowBack /></button>
          {
              (currentPosIndex > 0 && currentPosIndex < 5) &&
              [...Array(currentPosIndex)].map((x, i) =>
                  <button className="pagination-item" key={i} onClick={e => setCurrentPosition(i*breakpoint)}>{i+1}</button>
              )
          }
          {
              (currentPosIndex >= 5 ) &&
              [...Array(5)].map((x, i) =>
                  <button className="pagination-item" key={i} onClick={e => setCurrentPosition((parseInt(currentPosIndex) - parseInt(5-i))*breakpoint)}>{(parseInt(currentPosIndex) - parseInt(5-i))+1}</button>
              )
          }
          <button className="pagination-item pagination-active" >{currentPosIndex +1 }</button>
          {
              (units - currentPosIndex >= 5) &&
              [...Array(5)].map((x, i) =>
                  <button className="pagination-item" key={i} onClick={e => setCurrentPosition((parseInt(currentPosIndex) + parseInt(i+1))*breakpoint)}>{(parseInt(currentPosIndex) + parseInt(i+1))+1}</button>
              )
          }
          {
              (units - currentPosIndex < 5) &&
              [...Array(units - currentPosIndex)].map((x, i) =>
                  <button className="pagination-item" key={i} onClick={e => setCurrentPosition((parseInt(currentPosIndex) + parseInt(i+1))*breakpoint)}>{(parseInt(currentPosIndex) + parseInt(i+1))+1}</button>
              )
          }
          <button className="pagination-item" style={{display: 'block'}} onClick={e => {
              if(currentPosIndex < units){
                  setCurrentPosition(currentPosition + breakpoint)
              }
              }}
          ><IoIosArrowForward/></button>

          <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
          <select className="pagination-select" onChange={e => setBreakpoint(e.target.value)} defaultChecked={currentPosition} value={breakpoint}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
          </select>    
          <font style={{fontSize: 12, marginLeft: 50}}> Items per Page</font>
          </div>    

         
      </div>
  )
}