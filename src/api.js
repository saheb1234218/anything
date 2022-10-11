
import axios from 'axios';

// eslint-disable-next-line 
const localhost = "http://localhost:5000/api/"
// eslint-disable-next-line 
const live = "https://jobportalblanc.herokuapp.com/api/"
const domain = localhost


export async function createUser(obj){
    try{
        
            // const obj1={
            //     "uid": obj.uid,
            //     "email": obj.email,
            //     "type": obj.type,
            //     "name": obj.name,
            //     "companyName": obj.companyName,
            //     "companyType": obj.companyType,
            //     "companySize": obj.companySize
            //   }
       
            //   axios.post("http://localhost:5000/api/user",obj1).then((res)=>{
            //     console.log(res);
            //   }).catch((err)=>{
            //     console.log(err)
            //   });
        const res = await axios.post(domain + `user`, obj)
        
             console.log(res.data)
        if(res.status === 200){
            return res.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getAllUser(){
    try{
        const res = await axios.get(domain + `user/`)

        console.log(res)
        if(res.status === 200){
            return res.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getuserDetail(id){
    try{
        const res = await axios.get(domain + `user/` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.user
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function deleteUser(id){
    try{
        const res = await axios.delete(domain + `user/` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.user
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function deleteJob(id){
    try{
        const res = await axios.delete(domain + `job/` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.user
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function updateUserDetails(id, name, phone, status, currentCity, preferredCity, resume){
    try{
        const res = await axios.put(domain + `user/` + id, 
            { 
                name: name,
                phone: phone,
                status: status,
                city: currentCity,
                preferredCity: preferredCity,
                resume: resume,
            })

            console.log(res)
        if(res.status === 200){
            return res
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function updateUser(obj,uid){

    console.log(obj.cdoc, obj.kdoc,obj.coins,uid)
    try{
        const res = await axios.put(domain + `user/` + uid, 
            { 
                name: obj.name,
                uid: uid,
                city: obj.city,
                phone: obj.phone,
                email: obj.email,
                website: obj.website,
                facebook: obj.facebook,
                twitter: obj.twitter,
                linkedin: obj.linkedin,
                googleplus: obj.googleplus,
                description: obj.description,
                profileimg: obj.profileimg,
                resume: obj.resume,
                latitude: obj.latitude,
                longitude: obj.longitude,
                companyDocument: obj.cdoc,
                kycDocument: obj.kdoc,
                salarySlip: obj.salarySlip,
                certificates: obj.certificates,
                addressProof: obj.addressProof,
                releaseLetter: obj.releaseLetter,
                educational: obj.educational,
                professional: obj.professional,
                cna: obj.cna,
                skills: obj.skills,
                coins: obj.coins
            })

            console.log(res)
        if(res.status === 200){
            return res
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function verifyUser(id){
    try{
        const res = await axios.put(domain + `user/` + id, 
            { 
                companyVerified: true,
                kycVerified: true
            })

            console.log(res)
        if(res.status === 200){
            return res
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}
export async function getJobs(page,limit,sort,name,category,city,type){
    try{
        console.log("Getting jobs...")
        const res = await axios.get(domain + `/job?limit=${limit}&page=${page}&title=${name}&category=${category}&city=${city}&type=${type}&sort=${sort}`)
        console.log(res)
        if(res.status === 200){
            return res.data.jobs
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
    }catch(e){
        console.log(e);
        return null
    }
}

export async function postJob(
    title,
    company_id,
    type,
    hoursperweek,
    salary,
    salarycurrency,
    category,
    minexp,
    maxexp,
    description,
    responsibilities,
    qualifications,
    procedure, city,uid,coins){
        console.log(coins,uid)
    try{
        axios.put(domain+`deductCoins/${uid}`,{
            "coins": coins
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        const res = await axios.post(domain + `job/`, { 
            title : title,
            company_id : company_id,
            type : type,
            city: city,
            hoursperweek : hoursperweek,
            salary: salary,
            salarycurrency: salarycurrency,
            category: category,
            minexp: minexp,
            maxexp: maxexp,
            description: description,
            responsibilities: responsibilities,
            qualifications: qualifications,
            procedure: procedure,
        })

        console.log(res)
        if(res.status === 200){
            return res.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getJobDetail(id){
    try{
        const res = await axios.get(domain + `job/` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function postApplication(
    applicant_id,
                job_id,
                description,company_id){
    try{
        const res = await axios.post(domain + `application/`, { 
                applicant_id: applicant_id,
                company_id : company_id,
                description: description,
                job_id: job_id,
        })

        console.log(res)
        if(res.status === 200){
            return res.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getAllApplicant(id){
    try{
        const res = await axios.get(domain + `application?job_id=` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.applications
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getAllCompanyApplicant(id){
    try{
        const res = await axios.get(domain + `application?company_id=` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.applications
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getAllJobsApplied(id){
    try{
        const res = await axios.get(domain + `application?applicant_id=` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.applications
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function getAllJobsPosted(id){
    try{
        const res = await axios.get(domain + `filterjob?company_id=` + id)
        console.log(res)
        if(res.status === 200){
            return res.data.jobs
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function updateUserResume(id, resume){
    try{
        const res = await axios.put(domain + `user/` + id, 
            { 
                resume: resume,
            })

            console.log(res)
        if(res.status === 200){
            return res
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}

export async function postNotification(uid, message){
    try{
        const res = await axios.post(domain + `notification/`, { 
                user_id: uid,
                content : message
        })

        console.log(res)
        if(res.status === 200){
            return res.data
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
        
    }catch(e){
        console.log(e);
        return null
    }
}


export async function getNotification(uid){
    try{
        const res = await axios.get(domain + `notification?user_id=` + uid)
        console.log(res)
        if(res.status === 200){
            return res.data.notifications
        }else{
            console.log(res.status, res.statusText, res.data.status);
            return null
        }
    }catch(e){
        console.log(e);
        return null
    }
}