// StaffDetails.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { fetchStaffDetails } from '../../API/staff';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { setAppraised } from '../../Slice/AppraiseSlice';
import Navbar from '../NavBar/index';
import './staffDetails.css';
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Appraisal from '../Appraisal_button.js/appraise';
import { Appraised } from '../../API/authApi';
import Swal from 'sweetalert2';
import axios from 'axios';

const StaffDetails = ({ }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const staffId = location.pathname.split('/')[2];

    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(0);
    const dispatch = useAppDispatch();

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

    const calculateTotalScore = async () => {
        const totalScore = parseInt(scores.score1) + parseInt(scores.score2) + parseInt(scores.score3) + parseInt(scores.score4);
        
        const sqa = await axios.get('https://uba-outsourced.onrender.com/v1/AppraisalUpload');
        const sqaAppraised = sqa.data.staffList;
        const sqaapp = sqaAppraised.filter(staff => staff.staffId === staffDetails.staffId);
        const sqatotal = sqaapp[0].Score * 100;
        console.log('Filtered Staff Details:', sqatotal);


        
        const staffId = staffDetails.staffId;
        const firstname = staffDetails.firstname;
        const email = staffDetails.email;
        const lastname = staffDetails.lastname;
        const solId = staffDetails.solId;
        const supervisorId = staffDetails.supervisorId;
        const score = [totalScore + sqatotal] /2;
 

        console.log('Total Score:', score);
        const appraisal = { staffId, firstname, lastname, email, solId, score, supervisorId };
        
        if (score <= 40) {
            Swal.fire({
                title: "<h4>THIS WAS NOT SAVED</h4>",
                html: "<p>The lowest a staff can get is 40</p>",
                showCancelButton: true,
            }).then((result) => {
                if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else if (score >= 100) {
            Swal.fire({
                title: "<h4>THIS WAS NOT SAVED</h4>",
                html: "<p>The highest a staff can get is 99</p>",
                showCancelButton: true,
            }).then((result) => {
                if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else {
            Swal.fire({
                title: "Do you want to save this appraisal?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                if (result.isConfirmed) {
                    Appraised(appraisal);
                    Swal.fire("Saved!", "", "success");
                    navigate(`/appraise`);
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
    };

    if (!staffDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-lg p-3 mb-5 bg-white">
                        <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                            <div className="left d-flex flex-column">
                                <div className="mb-1 fw-bolder fs-5">Staff Details</div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                            <div className="left d-flex flex-column">
                                <div className="mb-1 fw-bold fs-7">Staff ID: {staffDetails.staffId}</div>
                                <div className="mb-1 fw-bold fs-7">First Name: {staffDetails.firstname}</div>
                                <div className="mb-1 fw-bold fs-7">Last Name: {staffDetails.lastname}</div>
                                <div className="mb-1 fw-bold fs-7">SOL ID: {staffDetails.solId}</div>
                                <div className="mb-1 fw-bold fs-7">Cost Code: {staffDetails.JobRole}</div>
                                <div className="mb-1 fw-bold fs-7">Appraisal score: {}</div>
                            </div>
                            <div className="right d-flex">
                                <div className="fa fa-comment-o"></div>
                                <div className="fa fa-phone"></div>
                            </div>
                        </div>

                        {/* Carousel */}
                        <div className="left d-flex flex-column">
                            <div className="left d-flex flex-column">
                                <div className="mb-1 fw-bolder fs-5">Appraise Staff</div>
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
                            <button type="button" className="btn btn-primary m-2" onClick={calculateTotalScore}>
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
