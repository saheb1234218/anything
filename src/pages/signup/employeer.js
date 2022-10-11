import { useState, React } from 'react'
import axios from 'axios';
import AddDetails from './addDetails';
import "./Signup.css"
export default function Employeer(props) {
  const [view, setView] = useState(0);
  const [main, setMain] = useState(false);
  const [phone, setPhone] = useState("");
  const [o1, seto1] = useState("");
  const [o2, seto2] = useState("");
  const [o3, seto3] = useState("");
  const [o4, seto4] = useState("");
  const [otp,setOtp]=useState(false);

  const ValidatePassKey=(x)=>{
    if(x<4)
    {
      document.getElementById(`${x+1}`).focus();
    }
    
  }

  const submit = async () => {
    localStorage.setItem("phone", phone);
    if (view == 0) {
      await axios.get(`https://2factor.in/API/V1/fc11faac-326d-11ed-9c12-0200cd936042/SMS/+91${phone}/AUTOGEN3/OTP1`).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
        alert("srry cant sent")
      })
      setView(1);
      console.log(phone)
    }
    else {
      var x;
      x = o1 + o2 + o3 + o4;
      await axios.get(`https://2factor.in/API/V1/fc11faac-326d-11ed-9c12-0200cd936042/SMS/VERIFY3/91${phone}/${x}`).then((res) => {
        console.log(res.data)
        if(res.data.Status==="Error")
        {
          setOtp(true);
        }
        else{
          //alert("success")
          setMain(true)
        }
        
      }).catch((err) => {
        console.log(err)
        alert("srry wrong otp")
      })
      console.log(x);
    }
  }

  const resend = async () => {
    await axios.get(`https://2factor.in/API/V1/fc11faac-326d-11ed-9c12-0200cd936042/SMS/+91${phone}/AUTOGEN3/OTP1`).then((res) => {
      console.log(res.data)
      alert("successfully sent otp")
    }).catch((err) => {
      console.log(err)
      alert("srry cant sent")
    })
  }

  return (
    <>{
      main ? <AddDetails phone={phone} /> : <>
        {view == 0 ? <>
          <div className="d-flex flex-row gap-5">
            <div className="col-sm-6 d-block d-flex justify-content-start align-items-center">
              <div id="carouselExampleInterval" class="carousel slide d-sm-block d-none" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="7000">
                    <div class="w-100">
                      <h2>Best <span style={{ color: 'green' }}>Candidates </span>reach</h2>
                      <h3>to <span style={{ color: 'green' }}>YOU</span> Directly.</h3>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="7000">
                    <div class="w-100">
                      <h2>Hire Staff in 48 hours.</h2>
                      <h3><span style={{ color: 'green' }}>FOR FREE</span></h3>
                    </div>
                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-sm-6  mt-3 col-xs-12 d-sm-none">
              <div className="row">
                <h3>Employer SignUp</h3>
              </div>
              <div className="row-xs-12 mt-2  " >
                <div className="col-xs-3">


                  <a type="submit" style={{ border: 'none', fontWeight: '600', height: '50px', color: 'grey', fontSize: '18px', backgroundColor: 'rgb(234, 237, 242)', cursor: 'none' }} class="btn btn-secondary pt-2">+91</a>

                </div>
                <div className="col-xs-9 mt-2">

                  <input  onChange={(e) => setPhone(e.target.value)} style={{ fontWeight: 'bold', letterSpacing: '0.6rem', fontSize: '20px', width: '250px', height: '54px' }} type="tel" class="form-control p-3 " id="inputPassword2" />

                </div>
              </div>
              <div className="row" style={{ marginLeft: '2px' }}>
                <button className="btn btn-primary text-light ml-2  mt-3" style={{ width: '320px', fontWeight: '600', height: '40px', backgroundColor: 'rgb(43, 183, 147)', border: 'none' }} onClick={submit}>Login to post a job</button>
                <small style={{}}>Not an employer <small onClick={() => { props.set() }} style={{ color: 'green', fontWeight: 'bold', cursor: 'pointer' }}>Click here ?</small></small>
              </div>
            </div>
            <div className="col-sm-6 ml-5 mt-3 col-xs-12 d-sm-block d-none">
              <div className="row">
                <h3>Employer SignUp</h3>
              </div>
              <div className="row mt-2 " >
                <div className="col-sm-3">


                  <a type="submit" style={{ border: 'none', fontWeight: '600', height: '50px', color: 'grey', fontSize: '18px', backgroundColor: 'rgb(234, 237, 242)', cursor: 'none' }} class="btn btn-secondary pt-2">+91</a>

                </div>
                <div className="col-sm-9 d-flex flex-column">

                  <input  onChange={(e) => setPhone(e.target.value)} style={{ fontWeight: 'bold', letterSpacing: '0.6rem', fontSize: '20px', width: '250px', height: '54px', marginLeft: '-80px' }} type="tel" class="form-control p-3 " id="inputPassword2" />

                </div>
              </div>
              <div className="row" style={{ marginLeft: '2px' }}>
                <button className="btn btn-primary text-light ml-2  mt-3" style={{ width: '320px', fontWeight: '600', height: '40px', backgroundColor: 'rgb(43, 183, 147)', border: 'none' }} onClick={submit}>Login to post a job</button>
                <small style={{}}>Not an employer <small onClick={() => { props.set() }} style={{ color: 'green', fontWeight: 'bold', cursor: 'pointer' }}>Click here ?</small></small>
              </div>
            </div>
          </div>

        </> : <>

          <div className="container flex-column d-flex justify-content-center align-items-center">
            <div className='row flex-column d-flex justify-content-center text-align-center align-items-center'>
              <div className='d-flex justify-content-center flex-column align-items-center'>
              <h3 className=' text-align-center' style={{marginLeft:'0px'}} >ENTER OTP</h3>
              <small style={{color:'rgb(107, 124, 143)',fontSize:'16px'}}>OTP sent to number <small style={{fontWeight:'700'}}>{phone}</small></small></div>
             
              </div>
               <div className="row-xs-12 d-flex mt-3 w-50"  >
            <div className="col-xs-3">


              <input className='w-50 shadow' style={{textAlign:'center',fontWeight:'bold',fontSize:'18px', height:'50px'}}  onChange={(e) => {
                ValidatePassKey(1)
                seto1(e.target.value)}} type="text" id="1" maxlength="1" />

            </div>
            <div className="col-xs-3">


              <input className='w-50 shadow' style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',height:'50px'}}  onChange={(e) => {
                ValidatePassKey(2)
                seto2(e.target.value)}} type="text" id="2" maxlength="1" />
            </div>
            <div className="col-xs-3">


              <input className='w-50 shadow' style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',height:'50px'}} onChange={(e) => {
                ValidatePassKey(3)
                seto3(e.target.value)}} type="text" id="3" maxlength="1" />

            </div>
            <div className="col-xs-3">


              <input className='w-50 shadow' style={{textAlign:'center',fontWeight:'bold',fontSize:'18px',height:'50px'}} onChange={(e) => {
                ValidatePassKey(4)
                seto4(e.target.value)}} type="text" id="4" maxlength="1" />

            </div>
            </div>
            <button className="btn btn-secondary w-50 mt-4" style={{marginLeft:'-35px', backgroundColor: 'rgb(43, 183, 147)' }} onClick={submit}>Submit</button>
            {otp?<span className='mt-1 d-flex justify-content-center' style={{marginLeft:'-15px',  cursor: 'pointer', color: 'red', fontWeight: 'bold' }} onClick={resend}>Wrong OTP Try Again</span>:null}
            <span className='mt-1 d-flex justify-content-center' style={{marginLeft:'-15px',  cursor: 'pointer', color: 'green', fontWeight: 'bold' }} onClick={resend}>Resend OTP</span>
          </div>
          
          </>}</>
    }



    </>
  )
}
