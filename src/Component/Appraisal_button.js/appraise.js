import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { updateScore } from "../../Slice/AppraiseSlice";
import Staff from "../../API/staff";
import supervisors from "../../API/supervisor";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import './Appraise.css';


const Appraisal = () => {

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  // State to hold the updated score
  const [scoreToUpdate, setScoreToUpdate] = useState('');

  // State to hold appraised staff
  const [appraisedStaff, setAppraisedStaff] = useState([]);

  // Filter staff based on supervisor_id
  const filteredStaff = Staff.filter((staff) => Staff.supervisor_Id === user.id);
  console.log('my staffs', filteredStaff)
  const sup_id = user.id;
  console.log('the super', sup_id)

  console.log(sup_id)

  const handleStaffDetails = (staffId) => {
   
    Navigate(`/staff/${staffId}`);
  };


  return (
    <>
   <div className="staff">list of staff</div>
   <div class="container my-2">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          
      {user && (
        <div>


          <table className="table table-striped tab ">
            <thead className="thead-dark" >
              <tr>
                <th>STAFF ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>COST CODE</th>
                <th>SOL ID</th>
                <th>Roles</th>
                <th>SCORE</th>
              </tr>
            </thead>

            {user.Staff.map((staff) => (
              // <li key={staff.staffId}>{staff.staffId}</li>
              <tr key={staff.staffId} className="warning"> 
                <td>{staff.staffId}</td>
                <td>{staff.first_name}</td>
                <td>{staff.last_name}</td>
                <td>{staff.cost_code}</td>
                <td>{staff.sol_id}</td>
                <td></td>
                <td>
                  <input
                    type="text"
                    value={scoreToUpdate}
                    onChange={(e) => setScoreToUpdate(e.target.value)}
                  />

                  <button className="btn btn-sm appbtn btn-primary" onClick={() => handleStaffDetails(staff.staffId)}>
                    Update Score
                  </button>


                </td>
              </tr>


            ))}
          </table>
        </div>




      )}
    </div>
        </div>

  

    </>
  );
}

export default Appraisal;