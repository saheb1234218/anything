// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCiVXiiFtDoY6mA54ED3R7gQ3MJz30gBX4",
//   authDomain: "job-portal-7ac8b.firebaseapp.com",
//   projectId: "job-portal-7ac8b",
//   storageBucket: "job-portal-7ac8b.appspot.com",
//   messagingSenderId: "922786686701",
//   appId: "1:922786686701:web:aa34e3af9fc0b81303cee4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBG0lKlbDLMoZPPeC31eOH16tA7hBZHu8o",
  authDomain: "heyjobs-4fb17.firebaseapp.com",
  projectId: "heyjobs-4fb17",
  storageBucket: "heyjobs-4fb17.appspot.com",
  messagingSenderId: "454585669129",
  appId: "1:454585669129:web:2f758dfb548af166c3cad8",
  measurementId: "G-8NTJ1148NE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const storage = app.storage();
export const db = app.firestore();
export default app;

export async function getServices() {
  try {
    const res = await db.collection("services").get()
    console.log("Printing", res)
    let all = []
    res.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let temp = doc.data();
      temp.id = doc.id;
      console.log(doc.id, " => ", doc.data());
      all.push(temp)
    });
    console.log(all)
    return all
  } catch (e) {
    console.log(e)
    return []
  }
}

export async function getWebsite() {
  try {
    const res = await db.collection("website").doc("category").get()
    console.log("Printing", res)
    return res.data().data
  } catch (e) {
    console.error(e)
    return []
  }
}

export async function updateWebsite(data) {
  try {
    const res = await db.collection("website").doc("category").set({data: data})
    console.log("Printing", res)
    return res.data()
  } catch (e) {
    console.log(e)
    return []
  }
}

export async function addServices(name, price, points) {
  try {
    const res = await db.collection("services").doc(Date.now().toString()).set({
      name: name,
      price: price,
      points: points
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}


export async function getServiceDetails(id) {
  try {
    const res = await db.collection("services").doc(id).get()
    return res.data()
  } catch (e) {
    console.log(e)
    return false
  }
}

export async function deleteService(id) {
  try {
    const res = await db.collection("services").doc(id).delete()
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
