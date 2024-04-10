import React  from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import { useAppSelector } from '../src/hook/hook';

import './App.css';
import Login from './Component/login';
import Home from './Pages/Home';
import Mainpage from './Pages/index';
import LoginPage from './Component/login/login';
import StaffDetails from './Component/StaffDetails/staffDetails';
import Appraisestaff from './Pages/Appraise';
import Dashboard from './Pages/dashboard/index';



const Pages = () => {
  return (
    <div>
    <Mainpage />

    </div>
 
  );
};

const Auth = () => {
  return (
    <div className="">
      <LoginPage />
    </div>
  );
};

const Homepage = () => {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element= {<Home /> } />
<Route path="/appraise" element={<Appraisestaff />} />
<Route path= "/staff/:staffId" element={<StaffDetails />} />
<Route path= "/staff/:dashboard" element={<Dashboard />} />
</Routes>
   </BrowserRouter>
  );
};

const App = () => {
  const user = useAppSelector((state) => state.user);

 return (
      <BrowserRouter>


{/* {user.isAuthenticated ? 

<Routes>
<Route path="/" element= {<Home /> } />
<Route path="/appraise" element={<Appraisestaff />} />
<Route path= "/staff/:staffId" element={<StaffDetails />} />
<Route path= "/staff/:dashboard" element={<Dashboard />} />
</Routes> :
<Dashboard />


} */}


{user.isAuthenticated ? (
        user.user.job_role === 'supervisor' ? (
          <Routes>
          <Route path="/" element= {<Home /> } />
<Route path="/appraise" element={<Appraisestaff />} />
<Route path= "/staff/:staffId" element={<StaffDetails />} />
<Route path= "/staff/:dashboard" element={<Dashboard />} />

</Routes>
        ) : user.user.job_role === 'super_admin' ? (
          <Dashboard />
        ) : (
          <Auth />
        )
      ) : (
        <Auth />
      )}



      {/* <Routes>
          <Route path="/" element={user.isAuthenticated ? <Home /> : <Auth />} />
          <Route path="/appraise" element={<Appraisestaff />} />
          <Route path= "/staff/:staffId" element={<StaffDetails />} />
        </Routes> */}
 
      </BrowserRouter>

      
    );
  };

//   return (
//     <div>
//       {!user.isAuthenticated ? <Auth /> : <Pages />}
//     </div>
//   );
// };

export default App;

