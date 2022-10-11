import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// eslint-disable-next-line
import PrivateRoute from "./PrivateRoute";



import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/Footer";
import './App.css';
import JobList from "./pages/joblist/JobList";
import JobDetails from "./pages/jobdetails/JobDetails";
import UserProfile from "./pages/userprofile/userProfile";
import Error from "./pages/error/error";
import PostJob from "./pages/postjob/postJob";
import Profile from "./pages/profile/profile";
import AdminRoute from "./AdminRoute";
import Candidate from "./pages/admin/candidate";
import Employer from "./pages/admin/employer";
import Jobs from "./pages/admin/jobs";
import Post from "./pages/admin/post";
import Edit from "./pages/admin/edit";
import Services from "./pages/admin/services";
import Website from "./pages/admin/website";
import UserSignup from "./pages/signup/user";
import AddEducation from "./pages/addEducation";
import LastStep from "./pages/LastStep";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/:section"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/postjob"
                element={
                  <PrivateRoute>
                    <PostJob />
                  </PrivateRoute>
                }
              />
              <Route
                path="/postjob/:jobid"
                element={
                  <PrivateRoute>
                    <PostJob />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/joblist" element={<JobList />} />
              <Route path="/jobdetails/:jobid" element={<JobDetails />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/user" element={<UserSignup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error/>}></Route>
              <Route
                path="/admin/"
                element={
                  <AdminRoute>
                    <Candidate/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/employer"
                element={
                  <AdminRoute>
                    <Employer/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/website"
                element={
                  <AdminRoute>
                    <Website/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/jobs"
                element={
                  <AdminRoute>
                    <Jobs/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/edit/:id"
                element={
                  <AdminRoute>
                    <Edit/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post"
                element={
                  <AdminRoute>
                    <Post/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/:jobid"
                element={
                  <AdminRoute>
                    <Post/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/services/"
                element={
                  <AdminRoute>
                    <Services/>
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/services/:id"
                element={
                  <AdminRoute>
                    <Services/>
                  </AdminRoute>
                }
              />
              <Route
                path="/addEducation"
                element={
                  
                    <AddEducation/>
                  
                }
              />
              <Route
                path="/LastStep"
                element={
                  
                    <LastStep/>
                  
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
