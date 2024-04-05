import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { AppDispatch } from "../../store/store";
import { setUser, setLogout, setloading, setError, selectIsAuthenticated } from '../../Slice/authSlice';

import { users } from "../../Slice/authSlice";
import { Supervisor } from "../../API/dataApi";

import { loginUser } from "../../API/authApi";
// import { useNavigate } from "react-router-dom";
// import supervisors from '../../API/supervisor';
import supervisors from '../../API/dataApi';
// import { loginUser } from '../../API/authApi'
import './login.css'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  //  console.log(users)


  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();



  // const handleLoginEvent = async (e) => {
  //   e.preventDefault();
  //   // navigate('/home')

  //   dispatch(setloading())

  //   const user = await loginUser(state);
  //   const email = state.email;
  //   const password = state.password;
  //   console.log(users.email)

  //   if (!state.email && !state.password) {
  //     dispatch(setError || 'kindly fill in appropriate info ')
  //   }
  //   else {
  //     try {
  //       dispatch(setloading())
  //       const user = await loginUser(state);
  //       console.log(user);
  //       dispatch(setUser(user))
  //       navigate('/home')

  //     } catch (error) {
  //       dispatch(setError('an error occurred while logging in'))
  //     }

  //   }


  // }


  // 
  
  const handleLoginEvent = async (e) => {
    e.preventDefault();
  
    const { email, password } = state;

    if (!email || !password) {
      dispatch(setError('Kindly fill in appropriate info'));
      console.log('Fill in the required information');
      return;
    }
  
    const matchingSupervisor = supervisors.find(
      (supervisor) => supervisor.email === email && supervisor.password === password
    );

    
    // const matchingSupervisor = supervisors.find((supervisor) => {
    //   console.log('Checking Supervisor:', supervisor);
    //   console.log('Emails:', supervisor.email, state.email);
    //   console.log('Passwords:', supervisor.password, state.password);
    //   return supervisor.email === state.email && supervisor.password === state.password;
    // });

    console.log('the supervisor of today is:', matchingSupervisor)
  
    if (!matchingSupervisor) {
      console.log('These credentials do not exist');
      return;
    }
  
    dispatch(setloading());
    dispatch(setUser(matchingSupervisor));
    // navigate('/home');
  };



  return (
    <>
      <div className="background">
        <div className="limit">
          <div className="login-container">
            <div className="bb-login">

              <form className="bb-form validate-form" >
                <span className="bb-form-title p-b-26"> Welcome </span>
                <span className="bb-form-title p-b-48"> <i class="mdi mdi-symfony"></i> </span>
                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
            
                  <input className="input100" type="text" name="email" value={state.email} onChange={handleChange} />
                  <span className="bbb-input" data-placeholder="Email" ></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass"> <i class="mdi mdi-eye show_password"></i> </span>
                  <input className="input100" type="password" name="password" value={state.password} onChange={handleChange} />

                  <span className="bbb-input" data-placeholder="Password"></span> </div>
                <div className="login-container-form-btn">
                  <div className="bb-login-form-btn" onClick={handleLoginEvent}>
                    <div className="bb-form-bgbtn"></div> <button className="bb-form-btn"> Login </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Login;
