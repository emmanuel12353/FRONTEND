
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAppDispatch, useAppSelector } from "../../hook/hook";
// import { updateScore } from "../../Slice/AppraiseSlice";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../NavBar";
// import './Appraise.css';

// const Appraisal = () => {
//   const user = useAppSelector((state) => state.user.user);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [staffList, setStaffList] = useState([]);
//   const [appraisalGroup, setAppraisalGroup] = useState([]);
//   const [sqaapp, setSqaapp] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://uba-outsourced.onrender.com/v1/staff');
//         const AppraisedStaff = await axios.get('https://uba-outsourced.onrender.com/v1/staff/apppraisal')
//         const sqa = await axios.get('https://uba-outsourced.onrender.com/v1/AppraisalUpload')
//         console.log('this is for appraised staff',AppraisedStaff.data.AppraisalList)
//         console.log(sqa)
//         const staff = response.data.staffList;
//         const AppraisalList = AppraisedStaff.data.AppraisalList;
//         const filteredStaff = staff.filter((item) => item.supervisorId === user.id.toUpperCase());
//         const filteredAppraisal = AppraisalList.filter((item) => item.supervisorId === user.id.toUpperCase());
//         const sqaAppraised = sqa.data.staffList
//             console.log('na im be this',sqaAppraised)
//         setStaffList(filteredStaff)
//         setAppraisalGroup(filteredAppraisal)
//         console.log(filteredAppraisal)
//         setSqaapp(sqaAppraised)
       

//       } catch (error) {
//         console.error("Error fetching staff data:", error);
//       }
//     };

//     fetchData();
//   }, [user.id]); // Fetch data whenever user id changes

// // navigate to the  major appraisal page
// const handleStaffDetails = (staffId) => {
//   console.log(staffId)
//   navigate(`/staff/${staffId}`);
// };

// // the appraised staff 



//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="container">
//         <div className="card">
//       <div className="staff pb-3">List of Staff</div>
//       <table className="table table-striped tab ">
//             <thead className="thead-dark" >
//               <tr>
//                 <th>STAFF ID</th>
//                 <th>FIRST NAME</th>
//                 <th>LAST NAME</th>
//                 <th>SOL ID</th>
                
//                 <th>Appraise Staff</th>
//               </tr>
//             </thead>
//           {staffList.map((staff) => (
     
//             <tr key={staff.staffId} className="warning"> 
//               <td>{staff.staffId}</td>
//               <td>{staff.firstname}</td>
//               <td>{staff.lastname}</td>
//               <td>{staff.solId}</td>
//               <td>
//                 <button className="btn btn-sm appbtn btn-primary" onClick={() => handleStaffDetails(staff.staffId)}>
//                   Update Score
//                 </button>


//               </td>
//             </tr>
         
//           ))}
//    </table>
//    </div>
//    </div>

// <div className="container">
//   <div className="card">
//    <div className="staff pb-3">List of appraised Staff</div>
//       <table className="table table-striped tab ">
//             <thead className="thead-dark" >
//               <tr>
//                 <th>STAFF ID</th>
//                 <th>FIRST NAME</th>
//                 <th>LAST NAME</th>
//                 <th>SOL ID</th>
//                 <th>supervisorId</th>
               
//                 <th>Score</th>
//               </tr>
//             </thead>
//           {appraisalGroup.map((staff) => (
     
//             <tr key={staff.staffId} className="warning"> 
//               <td>{staff.staffId}</td>
//               <td>{staff.firstname}</td>
//               <td>{staff.lastname}</td>
//               <td>{staff.solId}</td>
//               <td>{staff.supervisorId}</td>
//               <td>{staff.score}</td>
//             </tr>
         
//           ))}
//    </table>
//    </div>
//    </div>
//     </>
//   );
// };

// export default Appraisal;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { updateScore } from "../../Slice/AppraiseSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import Swal from 'sweetalert2';
import './Appraise.css';

const Appraisal = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [staffList, setStaffList] = useState([]);
  const [appraisalGroup, setAppraisalGroup] = useState([]);
  const [sqaapp, setSqaapp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://uba-outsourced.onrender.com/v1/staff');
        const AppraisedStaff = await axios.get('https://uba-outsourced.onrender.com/v1/staff/apppraisal')
        const sqa = await axios.get('https://uba-outsourced.onrender.com/v1/AppraisalUpload')
        console.log('this is for appraised staff', AppraisedStaff.data.AppraisalList)
        console.log(sqa)
        const staff = response.data.staffList;
        const AppraisalList = AppraisedStaff.data.AppraisalList;
        const filteredStaff = staff.filter((item) => item.supervisorId === user.id.toUpperCase());
        const filteredAppraisal = AppraisalList.filter((item) => item.supervisorId === user.id.toUpperCase());
        const sqaAppraised = sqa.data.staffList
        console.log('na im be this', sqaAppraised)
        setStaffList(filteredStaff)
        setAppraisalGroup(filteredAppraisal)
        console.log(filteredAppraisal)
        setSqaapp(sqaAppraised)

      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchData();
  }, [user.id]); // Fetch data whenever user id changes

  // Navigate to the major appraisal page
  const handleStaffDetails = (staffId) => {
    const staffAlreadyAppraised = appraisalGroup.some((staff) => staff.staffId === staffId);
    if (staffAlreadyAppraised) {
      Swal.fire({
        title: "Error",
        text: "Staff has been appraised",
        icon: "error",
      });
    } else {
      console.log(staffId)
      navigate(`/staff/${staffId}`);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="card">
          <div className="staff pb-3">List of Staff</div>
          <table className="table table-striped tab">
            <thead className="thead-dark">
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
          <table className="table table-striped tab">
            <thead className="thead-dark">
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
