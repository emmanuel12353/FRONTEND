import React from 'react';

import Navbar from '../Component/NavBar';
import Heroe from '../Component/heroe';
import Appraise from '../Component/Appraisal_button.js';
import Staffgrid from '../Component/grid/staffgrid.js';
import { setUser, setLogout, setloading, setError, selectIsAuthenticated } from '../Slice/authSlice.js';
function Home() {
  return (
    <div className="">
      <Navbar />
      <Heroe/>
      <Staffgrid />
     {/* <Appraise /> */}

    </div>
  );
}

export default Home;
