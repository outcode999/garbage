/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignOut from './pages/SignOut';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Header from './Components/Header';
import AdminDashboard from './pages/Admin/admindashboard';
import PrivateRoute from './Components/PrivateRoute';
import Users from './pages/Admin/users';
import Feed from './pages/Feedback/Feedback';
import ADDFeed from './pages/Feedback/Addfeedback';
import Update from './pages/Feedback/UpdateFeed';
import Tabl from './pages/Feedback/Table';
import DTabl from './pages/Feedback/Deletetable';
import {useSelector} from 'react-redux';

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  const isAdmin = currentUser?.isAdmin;


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/Table" element={<Tabl />} />
        <Route path="/delete" element={<DTabl />} />
       
       

        <Route element={<PrivateRoute/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/Addfeed" element={<ADDFeed />} />
        
        <Route path="/update/:feedbackId" element={<Update />} />
        
      
  
        
        {isAdmin ? (
          <>
            
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/users" element={<Users />} />
           
            
          </>
        ) : (
          <Route path="/admin-dashboard" element={<Navigate to="/" />} />
        )}

     
      
      </Routes>
    </BrowserRouter>
  );
}
