// Your login page file

import React, { useState } from 'react';// Adjust the path based on your file structure
import { Outlet, Link } from "react-router-dom";

import './staffgrid.css';

import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { AppDispatch } from "../../store/store";



const Staffgrid = () => {


  return (
    <div className='cont'>
  <div class="container">
  <div class="row">
  <Link to="/appraise" className='col-lg-4'>
    <div class="staffgrid1">
    TELLERS
    </div></Link>
    <Link to="/appraise" className='col-lg-4'>
    <div class="staffgrid2">
      DIRECT SALES EXECUTIVE
    </div></Link>
    <Link to="/appraise" className='col-lg-4'>
    <div class="staffgrid3">
      ANCILLIARY
    </div></Link>
  </div>
</div>
        </div>
  );
};

export default Staffgrid;
