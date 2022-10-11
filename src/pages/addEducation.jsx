import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer/Footer';
import styles from "../pages/addEducation.module.css"

const AddEducation = () => {
  return (
    <div className={styles.addedu}>
      <Navbar/>
      <div className={styles.eduMain}>
        <div className={styles.heading}>
          <h1>Mention Your Education</h1>
          <p >Adding your educational details will help recruiters know your value as a potential candidate</p>
        </div>
        <div className={styles.highestQuali}>
          <h4>Highest Qualification</h4>
          <div className={styles.highesQualiButton}>
            <button>Doctorate/PhD</button>
            <button>Masters/Post-Graduation</button>
            <button>Graduation/Diploma</button>
            <button>12th</button>
            <button>10th</button>
            <button>Below 10th</button>
          </div>
        </div>
        <div className={styles.highestQuali}>
          <h4>Course</h4>
          <input type="text" className={styles.courseInput} placeholder='Eg. Btech'  name="" id="" />
          Suggestions
          <div className={styles.highesQualiButton}>
            
            <button>Doctorate/PhD</button>
            <button>Masters/Post-Graduation</button>
            <button>Graduation/Diploma</button>
            
          </div>
        </div>
        <div className={styles.highestQuali}>
          <h4>Specialization</h4>
          <input type="text" className={styles.courseInput} placeholder='Eg. Pharma'  name="" id="" />
          
        </div>
        <div className={styles.highestQuali}>
          <h4>University/Institution</h4>
          <input type="text" className={styles.courseInput} placeholder='Eg. Techno India'  name="" id="" />
          
        </div>
        <div className={styles.highestQuali}>
          <h4>Course Type</h4>
          
          <div className={styles.highesQualiButton}>
            
            <button>Full Time</button>
            <button>Part Time</button>
            <button>Distance Learning</button>
            
          </div>
        </div>
        <div className={styles.highestQuali}>
          <h4>Passing Year</h4>
          <input type="text" className={styles.courseInput} placeholder='Eg. 2022'  name="" id="" />
          
          <div className={styles.highesQualiButton}>
            
            <button>2018</button>
            <button>2019</button>
            <button>2020</button>
            
          </div>
        </div>
        <div className={styles.highestQuali}>
          <h4>Key Skills</h4>
          <input type="text" className={styles.keySkillsInput} placeholder='Key Skills are crucial for recruiters to hire you'  name="" id="" />
        </div>
      </div>
      <div><button><a href="/LastStep">Save And Continue</a> </button></div>
      <Footer/>
    </div>

  )
}

export default AddEducation