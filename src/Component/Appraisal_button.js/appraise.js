// import React, { useState } from "react";
// import axios from "axios";

// import { useAppDispatch, useAppSelector } from "../../hook/hook";
// import { updateScore } from "../../Slice/AppraiseSlice";
// import Staff from "../../API/staff";
// import supervisors from "../../API/supervisor";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../NavBar";
// import './Appraise.css';


// const Appraisal = () => {

//   const user = useAppSelector((state) => state.user.user);
//   const dispatch = useAppDispatch();
//   const Navigate = useNavigate();

//   const getStaff = async () =>{
//     try{
//         const response = await axios.get('/v1/staff');
//         const Staff = response.data.staffList;
//         console.log(Staff)
//         // Filter staff based on supervisor_id
//   const filteredStaff = Staff.filter((staff) => staff.supervisorId === user.id);
//   console.log('this is it', filteredStaff)
//   return filteredStaff;
     
//     } catch(error) {
//         throw error.response.data
//     }
// }
// // console.log(getStaff())
//   // Filter staff based on supervisor_id
//   const filteredStaff = Staff.filter((staff) => Staff.supervisor_Id === user.id);
//   console.log('my staffs', getStaff())
//   const sup_id = user.id;
//   console.log('the supervisor is', sup_id)


//   const handleStaffDetails = (staffId) => {
   
//     Navigate(`/staff/${staffId}`);
//   };


//   return (
//     <>
//    <div className="staff">list of staff</div>
//    <div class="container my-2">
//           <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          
     
//     </div>
//         </div>

  

//     </>
//   );
// }

// export default Appraisal;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { updateScore } from "../../Slice/AppraiseSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import './Appraise.css';

const Appraisal = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [staffList, setStaffList] = useState([]);
  const [appraisalGroup, setAppraisalGroup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/staff');
        const AppraisedStaff = await axios.get('/v1/staff/apppraisal')
        console.log('this is for appraised staff',AppraisedStaff.data.AppraisalList)
        const staff = response.data.staffList;
        const AppraisalList = AppraisedStaff.data.AppraisalList;
        const filteredStaff = staff.filter((item) => item.supervisorId === user.id.toUpperCase());
        const filteredAppraisal = AppraisalList.filter((item) => item.supervisorId === user.id.toUpperCase());
        setStaffList(filteredStaff)
        setAppraisalGroup(filteredAppraisal)
       

      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchData();
  }, [user.id]); // Fetch data whenever user id changes

// navigate to the  major appraisal page
const handleStaffDetails = (staffId) => {
  console.log(staffId)
  navigate(`/staff/${staffId}`);
};

// the appraised staff 



  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="card">
      <div className="staff pb-3">List of Staff</div>
      <table className="table table-striped tab ">
            <thead className="thead-dark" >
              <tr>
                <th>STAFF ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>SOL ID</th>
                
                <th>Appraise Staff</th>
              </tr>
            </thead>
          {staffList.map((staff) => (
     
            <tr key={staff.staffId} className="warning"> 
              <td>{staff.staffId}</td>
              <td>{staff.firstname}</td>
              <td>{staff.lastname}</td>
              <td>{staff.solId}</td>
              <td>
                <button className="btn btn-sm appbtn btn-primary" onClick={() => handleStaffDetails(staff.staffId)}>
                  Update Score
                </button>


              </td>
            </tr>
         
          ))}
   </table>
   </div>
   </div>

<div className="container">
  <div className="card">
   <div className="staff pb-3">List of appraised Staff</div>
      <table className="table table-striped tab ">
            <thead className="thead-dark" >
              <tr>
                <th>STAFF ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>SOL ID</th>
                <th>supervisorId</th>
               
                <th>Score</th>
              </tr>
            </thead>
          {appraisalGroup.map((staff) => (
     
            <tr key={staff.staffId} className="warning"> 
              <td>{staff.staffId}</td>
              <td>{staff.firstname}</td>
              <td>{staff.lastname}</td>
              <td>{staff.solId}</td>
              <td>{staff.supervisorId}</td>
              <td>{staff.score}</td>
            </tr>
         
          ))}
   </table>
   </div>
   </div>
    </>
  );
};

export default Appraisal;
