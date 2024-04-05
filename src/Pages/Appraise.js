// Your login page file

import React, { useState } from 'react';// Adjust the path based on your file structure


import { useAppDispatch, useAppSelector } from "../hook/hook"
import { AppDispatch } from "../store/store";
import Appraisal from '../Component/Appraisal_button.js/appraise';
import Appraise from '../Component/Appraisal_button.js';



const Appraisestaff = () => {


  return (
    <div className='cont'>
      <Appraisal />
        </div>
  );
};

export default Appraisestaff;
