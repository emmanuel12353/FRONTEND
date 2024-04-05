import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hook/hook";

const Appraise = () => {

  const user = useAppSelector((state) => state.user.user);
  
    // State to hold the updated score
    const [scoreToUpdate, setScoreToUpdate] = useState('');

  return (
    <div className="container">
      <h2>list of staffs</h2>
      {user && (
        <div>


<table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>STAFF ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>COST CODE</th>
                <th>SOL ID</th>
                <th>SCORE</th>
              </tr>
              </thead>

          {user.Staff.map((staff) => (
            // <li key={staff.staffId}>{staff.staffId}</li>
            <tr key={staff.staffId}>
            <td>{staff.staffId}</td>
            <td>{staff.first_name}</td>
            <td>{staff.last_name}</td>
            <td>{staff.cost_code}</td>
            <td>{staff.sol_id}</td>
            <td>
              <input
                type="text"
                  value={scoreToUpdate}
                  onChange={(e) => setScoreToUpdate(e.target.value)}
              />
              {/* <button onClick={() => handleUpdateScore(staff.staffId)}>Update Score</button> */}
            </td>
          </tr>


          ))}
          </table>
          </div>

          


        )}
        </div>


  );
}

export default Appraise;