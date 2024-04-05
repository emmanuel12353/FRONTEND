


// StaffDetails.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { fetchStaffDetails } from '../../API/staff';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { setAppraised } from '../../Slice/AppraiseSlice';
import Navbar from '../NavBar/index';
import './staffDetails.css';

import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Appraisal from '../Appraisal_button.js/appraise';

const StaffDetails = ({ }) => {
    const location = useLocation();
    const staffId = location.pathname.split('/')[2];

    const [index, setIndex] = useState(0);
    const dispatch = useAppDispatch();
    // const Appstaff = useAppSelector((state) => state.staffAppraisal.appraised.staffId);
    // console.log(Appstaff.score)
    

console.log()
    const { data: staffDetails } = useQuery(['staffDetails', staffId], () =>
        fetchStaffDetails(staffId)
    );

    const [scores, setScores] = useState({ score1: '', score2: '', score3: '', score4: '' });

    const handleScoreChange = (name, value) => {
        setScores((prevScores) => ({ ...prevScores, [name]: (value) || 1 }));
    };
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const calculateTotalScore = () => {
        const totalScore = parseInt(scores.score1) + parseInt(scores.score2) + parseInt(scores.score3) + parseInt(scores.score4) ;
        // You can dispatch an action or perform any other action with the total score
        console.log('Total Score:', totalScore);
        const staffId = staffDetails.staffId;
        const firstName = staffDetails.first_name;
        const lastName = staffDetails.last_name;
        const costCode = staffDetails.cost_code;
        const score = totalScore
        const Appraisal = { staffId, firstName, lastName,costCode, score }
        
        console.log(Appraisal)
        dispatch(setAppraised(Appraisal))
    };

    if (!staffDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="card shadow-lg p-3 mb-5 bg-white">
                        <div class="row d-flex justify-content-between mx-2 px-3 card-strip">
                            <div class="left d-flex flex-column">
                                <div class="mb-1 fw-bolder fs-5 ">Staff Details</div>
                            </div>

                        </div>
                        <div class="row d-flex justify-content-between mx-2 px-3 card-strip">
                            <div class="left d-flex flex-column">
                                <div class="mb-1 fw-bold fs-7">Staff ID: {staffDetails.staffId}</div>
                                <div class="mb-1 fw-bold fs-7">First Name: {staffDetails.first_name}</div>
                                <div class="mb-1 fw-bold fs-7">Last Name: {staffDetails.last_name}</div>
                                <div class="mb-1 fw-bold fs-7">SOL ID: {staffDetails.sol_id}</div>
                                <div class="mb-1 fw-bold fs-7">Cost Code: {staffDetails.cost_code}</div>
                                <div class="mb-1 fw-bold fs-7">Appraisal score: {}</div>
                            </div>
                            <div class="right d-flex">
                                <div class="fa fa-comment-o"></div>
                                <div class="fa fa-phone"></div>
                            </div>
                        </div>

                        {/* Carousel */}
                        <div className="left d-flex flex-column">
                            <div className="left d-flex flex-column">
                                <div className="mb-1 fw-bolder fs-5 ">Appraise Staff</div>
                            </div>
                        </div>
                        <br />
                        
                            <div className="container mb-5 pb-3">
                                <div className="mb-1 fw-bolder fs-9">Customer 1st Philosophy - Value Creation (Originates and contributes useful ideas; Goes the extra mile to deliver more than is expected; Solves problems)</div>
                                <Form.Control
                                    value={scores.score1}
                                    onChange={(e) => handleScoreChange('score1', e.target.value)}
                                    type="number"
                                    placeholder="Score (1-5)"
                                />
                            </div>
                            <div className="container mb-5 pb-3">
                                <div className="mb-1 fw-bolder fs-9">Turnaround Time (Completes assigned tasks within stipulated/expected turn-around time)</div>
                                <Form.Control
                                    value={scores.score2}
                                    onChange={(e) => handleScoreChange('score2', e.target.value)}
                                    type="number"
                                    placeholder="Score (1-5)"
                                />
                            </div>

                            <div className="container mb-5 pb-3">
                                <div className="mb-1 fw-bolder fs-9">Quality of Day-to-Day Work - Gets the work done very well; Delivers high-quality output and outcomes; Error-free work requiring minimal rework</div>
                                <Form.Control
                                    value={scores.score3}
                                    onChange={(e) => handleScoreChange('score3', e.target.value)}
                                    type="number"
                                    placeholder="Score (1-5)"
                                />
                            </div>

                            <div className="container mb-5 pb-3">
                                <div className="mb-1 fw-bolder fs-9">Productivity (Gets the job done; Has high productivity level)</div>
                                <Form.Control
                                    value={scores.score4}
                                    onChange={(e) => handleScoreChange('score4', e.target.value)}
                                    type="number"
                                    placeholder="Score (1-5)"
                                />
                            </div>
                            <div className="container mb-5 pb-3">
                                <button type="button" className="btn btn-primary m-5" onClick={calculateTotalScore}>
                                    Submit
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    );
};

export default StaffDetails;


