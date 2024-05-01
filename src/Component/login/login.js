// Your login page file

import { useState, useEffect } from 'react';// Adjust the path based on your file structure


import { useAppDispatch, useAppSelector } from "../../hook/hook"
import { AppDispatch } from "../../store/store";


import { setUser, setLogout, setloading, setError, selectIsAuthenticated } from '../../Slice/authSlice';
import axios from 'axios';

// import { useNavigate } from "react-router-dom";

import supervisors from '../../API/dataApi';
import './login.css';
import Swal from 'sweetalert2';




const LoginPage = () => {
  const [state, setState] = useState({ email: '', password: '' });


  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(setUser);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    if (!email || !password) {
      Swal.fire({
        title: "<h4>kindly fill</h4>",
        html: `
        <P>you are to fill in your details</p>
      `,
        showCancelButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        } 
      });

      console.log('Fill in the required information');
      return;
    }

   



    try {
      const response = await axios.post('https://uba-outsourced.onrender.com/v1/login', {
        email,
        password
      });

      if (response.status === 200) {
      console.log('sucess')
    
      const user = response.data.existingsupervisor;
      dispatch(setloading());
 
      dispatch(setUser(user));

      console.log('this is the current user', user)
      } else {
        console.log('fail')
        Swal.fire({
          title: "<h4>unable to login</h4>",
          html: `
          <P>this user cannot login, kinldy  contact HR for assistance</p>
        `,
          showCancelButton: true,
        })
      }
    } catch (error) {
      Swal.fire({
        title: "<h4>unable to login</h4>",
        html: `
        <P>this user cannot login, kinldy  contact HR for assistance</p>
      `,
        showCancelButton: true,
      })
      
    }
  
  






  // const matchingSupervisor = supervisors.find(
  //   (supervisor) => supervisor.email === email && supervisor.password === password
  // );

  // if (!matchingSupervisor) {
  //   console.log('These credentials do not exist');
  //   return;
  // }

  // // Handle successful login
  // console.log('Login successful:', matchingSupervisor);

  // dispatch(setloading());
 
  // dispatch(setUser(matchingSupervisor));

};

return (
  <div>
    <div className="background">
      <div className="limit">
        <div className="login-container login">

          <div className="bb-login">
            <form onSubmit={handleLoginEvent} className="bb-form validate-form" >
              <span className="bb-form-title p-b-26"> Welcome </span>
              <span className="bb-form-title p-b-48"> <i class="mdi mdi-symfony"></i> </span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">

                <div class="">
                  <label for="exampleInputEmail1" className="form-label label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                    value={state.email}
                    onChange={handleInputChange} />
                </div>
              </div>

              {/* <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            required
          /> */}

              <br />

              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password"
                  value={state.password}
                  onChange={handleInputChange} />
              </div>


              {/* <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            required
          />
        <br /> */}
              <button type="submit" className='btn btn-primary'>Login</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default LoginPage;
