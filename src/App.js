import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppSelector } from '../src/hook/hook';

import './App.css';
import Login from './Component/login';
import Home from './Pages/Home';
import Mainpage from './Pages/index';
import LoginPage from './Component/login/login';
import StaffDetails from './Component/StaffDetails/staffDetails';
import Appraisestaff from './Pages/Appraise';




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

const App = () => {
  const user = useAppSelector((state) => state.user);

 return (
      <BrowserRouter>
      {/* {user.isAuthenticated ? 
       <Routes>
       <Route path="/" element={ <Home /> } />
       <Route path="/appraise" element={<Appraisestaff />} />
       <Route path= "/staff/:staffId" element={<StaffDetails />} />
     </Routes>
     :
     <Routes>
     <Route path= "/login" element={<Auth />} />
     </Routes> 
    } */}
      <Routes>
          <Route path="/" element={user.isAuthenticated ? <Home /> : <Auth />} />
          <Route path="/appraise" element={<Appraisestaff />} />
          <Route path= "/staff/:staffId" element={<StaffDetails />} />
        </Routes>
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

