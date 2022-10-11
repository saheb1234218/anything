import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faApple, faAmazon, faAngular, faWindows } from '@fortawesome/free-brands-svg-icons'
import {MdCategory} from 'react-icons/md'
import empl from "../../assets/empl.png"
import cand from "../../assets/cand.png"
import "./home.css";
import Footer from "../../components/footer/Footer";



import comp1 from "../../assets/new/13.png"
import comp2 from "../../assets/new/14.png"
import comp3 from "../../assets/new/15.png"
import comp4 from "../../assets/new/16.png"
import comp5 from "../../assets/new/17.png"
import comp6 from "../../assets/new/18.png"
import comp7 from "../../assets/new/19.png"
import comp8 from "../../assets/new/20.png"
import { getServices, getWebsite } from "../../firebase";

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

const skills = ["Written and verbal communication"," Customer service"," Interpersonal skills"," Document management"," Microsoft Office skills"," Job-specific software ","Event coordination ","Organization"," Web Development ","UI/UX Designer",]

const cities = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai", "Lucknow"]

const arrCat = [0,1,2,3,4,5]

export default function Home () {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])

    async function initialize() {
        const res = await getServices();
        const res2 = await getWebsite();
        console.log(res)
        console.log(res2)
        if (res) {
            setData(res)
        }
        if(res2){
          setCategory(res2)
        }
    }

    useEffect(() => {
        initialize()
    }, [])
  return (
    <div className="home">
      <Navbar className="navbar" />

      <div className="hero">
        <div className="hero-info">
          <font className="hero-header"> Find Your <span style={{color:'#666'}}>Dream Job</span><br></br> With Us</font>
          <font className="hero-subtitle">786 jobs & 110 candidates are registeresd</font>
          <form method="get" action="/joblist/" className="hero-search">
          <select id="category" name="category">
                        <option value="" disabled={true} selected={true}>Category</option>
                        {
                            categories.map(item=><option value={item}>{item}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
            <input type="text" placeholder="Job Title"/>
            <select id="location" name="location">
                        <option value="" disabled={true} selected={true}>Location</option>
                        {
                            cities.map(item=><option value={item}>{item}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
            <select id="skill" name="skill" style={{border: "none"}}>
                        <option value="" disabled={true} selected={true}>Skills</option>
                        {
                            skills.map(item=><option value={item}>{item}</option>)
                        }
                        <option value="Others">Others</option>
                    </select>
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" fontSize={20}/></button>
          </form>

          {/* <div className="hero-icons">
            <FontAwesomeIcon icon={faApple} color="#999" fontSize={28}/>
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={28}/>
            <FontAwesomeIcon icon={faAngular} color="#999" fontSize={28}/>
            <FontAwesomeIcon icon={faWindows} color="#999" fontSize={28}/>
            <FontAwesomeIcon icon={faBlog} color="#999" fontSize={28}/>
          </div> */}
        </div>
        <div className="hero-image">
          <img src={require('../../assets/Person1.png')} alt="" />
          <div className="Underline">-</div>
        </div>
      </div>

      <div className="jobs">
        <div className="jobs-header">
          <font className="jobs-title">Trusted by Top Companies</font>
          <font className="jobs-subtitle">1828288 Jobs</font>
        </div>
        <div className="jobs-list jobs-list1">
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp1} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp2} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp3} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp4} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp5} alt="" />
          </a>
          <a href="./joblist" className="item1">
            
            <img src={comp6} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp7} alt="" />
          </a>
          <a href="/joblist" className="item1">
            {/* <FontAwesomeIcon icon={faApple} color="#999" fontSize={64}/>
            <font style={{padding: 10}}>Apple</font> */}
            <img src={comp8} alt="" />
          </a>
        </div>
        <a href="/joblist" className="viewall">Get a Job</a>
      </div>

      {/* <div className="jobs">
        <div className="jobs-header">
          <font className="jobs-title">Jobs by Domain</font>
          <font className="jobs-subtitle">1828288 Jobs</font>
        </div>
        <div className="jobs-list">
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
        </div>
        <button className="viewall">View All</button>
      </div> */}

      <div className="jobs">
        <div className="jobs-header">
          <font className="jobs-title">Jobs by Category</font>
          <font className="jobs-subtitle">1828288 Jobs</font>
        </div>
        <div className="jobs-list">
          
          {
            category.map(item=>{
              return(
                <a href={"/joblist?category="+encodeURIComponent(item)} className="item2">
                  < MdCategory style={{color: '#999', height:56, width:56, margin: 20}} />
                  <div className="item-info">
                    <font style={{padding: 5, fontSize: 18}}>{item}</font>
                  </div>
                </a>
              )
            })
          }
         
        </div>
        {/* <div className="jobs-list">
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
          <div className="item2">
            <FontAwesomeIcon icon={faAmazon} color="#999" fontSize={64} style={{padding: 20}}/>
            <div className="item-info">
              <font style={{padding: 5, fontSize: 18}}>Web Designer</font>
              <font style={{padding: 5, fontSize: 13}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </font>
            </div>
            
          </div>
        </div> */}
        <a href="/joblist" className="viewall">Get a Job</a>
      </div>

      <div className="jobs">
        <div className="jobs-header">
          <font className="jobs-title">Jobs by Location</font>
          <font className="jobs-subtitle">1828288 Jobs</font>
        </div>
        <div className="jobs-list">
          <a href={"/joblist?category="+encodeURIComponent("Kolkata")} className="item3" style={{backgroundImage: "url('https://images.pexels.com/photos/4334157/pexels-photo-4334157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Kolkata</font>
            </div>
          </a>
          <a href={"/joblist?category="+encodeURIComponent("Delhi")} className="item3" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZGVsaGklMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Delhi</font>
            </div>
          </a>
          <a href={"/joblist?category="+encodeURIComponent("Mumbai")} className="item3" style={{backgroundImage: "url('https://media.gettyimages.com/photos/india-gate-new-delhi-picture-id482018359?k=20&m=482018359&s=612x612&w=0&h=fkr9Qd1J9B1PclXti9q0ry9pZwaZDYvZD1Ywf1eDq30=')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Mumbai</font>
            </div>
          </a>
          <a href={"/joblist?category="+encodeURIComponent("Bangalore")} className="item3" style={{backgroundImage: "url('https://media.gettyimages.com/photos/sunset-at-vidhana-soudha-in-bangalore-karnataka-india-picture-id899271434?k=20&m=899271434&s=612x612&w=0&h=oF1qnEzPUl0z-t9HdGbPQJ1t7mQ5fmrDNBJlA1CUlkM=')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Bangalore</font>
            </div>
          </a>
          <a href={"/joblist?category="+encodeURIComponent("Chennai")} className="item3" style={{backgroundImage: "url('https://media.gettyimages.com/photos/traffic-at-dusk-central-chennai-picture-id469873689?k=20&m=469873689&s=612x612&w=0&h=F-v35WqtZmVioSj8Yn7IVE7SuWp6FxxfjMGaLfN212o=')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Chennai</font>
            </div>
          </a>
          <a href={"/joblist?category="+encodeURIComponent("Lucknow")} className="item3" style={{backgroundImage: "url('https://media.gettyimages.com/photos/rumi-darwaza-lucknow-india-picture-id861615468?k=20&m=861615468&s=612x612&w=0&h=-hLFWd87lsfmS10hLDkdQnWZPOyxeqY4G451NxSh7EQ=')"}}>
            <div className="overlay">
              <font style={{padding: 5, fontSize: 24, color: '#fff'}}>Lucknow</font>
            </div>
          </a>
        </div>
        <a href="/joblist" className="viewall">Get a Job</a>
      </div>

      {/* <section className="pricing" >
        <div className="jobs-header">
          <font className="jobs-title">Premium Serives</font>
          <font className="jobs-subtitle">Your next level product development company assets</font>
        </div>

        <div className="pricing-list">
          {
            data.map(item =>{
              const price = item.price.split(" ")
              return(
                <div className="pricing-card" key={item.id}>

                  <div className="pricing-card-title">{item.name}</div>

                  <div className="pricing-card-amount">
                    <div className="price">
                      <span>{price[0]}</span>{price[1]}
                    </div>
                    <div className="duration">
                      / Per Month
                    </div>
                  </div>

                  <div className="pricing-card-details">
                    <ul>
                      {
                        item.points.map(point=><li>{point.text}</li>)
                      }
                    </ul>
                  </div>

                  <button>
                    Select Plan
                  </button>
                </div>
              )
            })
          }
          <div className="pricing-card">

            <div className="pricing-card-title">Basic Plan</div>

            <div className="pricing-card-amount">
              <div className="price">
                <span>$</span>29
              </div>
              <div className="duration">
                / Per Month
              </div>
            </div>

            <div className="pricing-card-details">
              <ul>
                <li>5 Job Posting</li>
                <li>2 Featured Jobs</li>
                <li>1 Renew Jobs</li>
                <li>10 Days Duration</li>
                <li>Email Alert</li>
              </ul>
            </div>

            <button>
              Select Plan
            </button>
          </div>

          <div className="pricing-card">

            <div className="pricing-card-title">Premium Plan</div>

            <div className="pricing-card-amount">
              <div className="price">
                <span>$</span>49
              </div>
              <div className="duration">
                / Per Month
              </div>
            </div>

            <div className="pricing-card-details">
              <ul>
                <li>5 Job Posting</li>
                <li>2 Featured Jobs</li>
                <li>1 Renew Jobs</li>
                <li>10 Days Duration</li>
                <li>Email Alert</li>
              </ul>
            </div>

            <button>
              Select Plan
            </button>
          </div>

          <div className="pricing-card">

            <div className="pricing-card-title">Advanced Plan</div>

            <div className="pricing-card-amount">
              <div className="price">
                <span>$</span>69
              </div>
              <div className="duration">
                / Per Month
              </div>
            </div>

            <div className="pricing-card-details">
              <ul>
                <li>5 Job Posting</li>
                <li>2 Featured Jobs</li>
                <li>1 Renew Jobs</li>
                <li>10 Days Duration</li>
                <li>Email Alert</li>
              </ul>
            </div>

            <button>
              Select Plan
            </button>
          </div>
        </div>
      </section> */}
      <section className="capsule">
        <div className="capsuleHead">
              <header className="capsuleHeader">Register with us</header>
              <div className="capsulePara">Your next level product development company assets</div>
            </div>
        <div className="capsuleContent">
          <div className="employer">
            <img src={empl} color="#999" fontSize={64} style={{padding: 20}} alt="empl"/>
            
            <header className="contentHeader">I’m An Employer</header>
            <div className="contentPara">
              Signed in companies are able to post new job offers, searching for candidates...
            </div>
            <button className="capsuleButton">
              <a href="/signup">Register As Company</a> 
            </button>
            <div className="or"><p>OR</p></div>
          </div>
          
          <div className="candidate">
            <img src={cand} color="#999" fontSize={64} style={{padding: 20}} alt="cand"/>
            <header className="contentHeader">I’m An Candidate</header>
            <div className="contentPara" >
              Signed in companies are able to post new job offers, searching for candidates...
            </div>
            <button className="capsuleButton">
              <a href="/signup">Register As Candidate</a> 
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
