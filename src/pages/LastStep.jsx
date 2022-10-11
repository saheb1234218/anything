import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer/Footer';
import styles from "../pages/LastStep.module.css"


const LastStep = () => {
  return (
    <div className={styles.LastStep}>
        <Navbar/>
        <div className={styles.LastStepMain}>
            <div className={styles.heading}>
                <h1>Add headline & preferences</h1>
                <p>Add preferences to get relevant job recommendations & make your profile stronger</p>
            </div>
            <div className={styles.LastStepResume}>
                <h4>Resume Headline</h4>
                <input type="text" placeholder="Looking for jobs requiring following skills: Wealth Management,Private Banking,Priority Banking" className={styles.LastStepInput}   name="" id="" />
          
            </div>
            <div className={styles.LastStepResume}>
                <h4>Preffered Job Type</h4>
                
                <div className={styles.LastStepButton}>
                    
                    
                    <button>Permanent</button>
                    <button>Temporary/Contract</button>
                    
                </div>
            </div>
            <div className={styles.LastStepResume}>
                <h4>Preffered Employement Type</h4>
                
                <div className={styles.LastStepButton}>
                    
                    <button>Full Time</button>
                    <button>Part Time</button>
                    
                    
                </div>
            </div>
            <div className={styles.LastStepResume}>
                <h4>Preffered Work Locations</h4>
                <input type="text" placeholder='Eg. Kolkata' className={styles.LastStepLocationInput} />
                <div className={styles.LastStepButton}>
                    
                    <button>Bengaluru</button>
                    <button>Kolkata</button>
                    <button>Pune</button>
                    <button>Maharashtra</button>
                    <button>Delhi</button>
                    <button>Goa</button>
                    <button>Hyderabad</button>
                </div>
            </div>
            <div className={styles.LastStepResume}>
                <h4>Gender</h4>
                
                <div className={styles.LastStepButton}>
                    
                    <button>Male</button>
                    <button>Female</button>
                    
                    
                </div>
            </div>
        </div>
        <div><button><a href="/dashboard/setting">Submit</a> </button></div>
        <Footer/>
    </div>
  )
}

export default LastStep