
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Home';
import Appraisestaff from './Appraise';
import StaffDetails from '../Component/StaffDetails/staffDetails';



const Mainpage = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appraise" element={<Appraisestaff />} />
          <Route path= "/staff/:staffId" element={StaffDetails} />
        </Routes>
      </BrowserRouter>

      
    );
  };

  export default Mainpage;