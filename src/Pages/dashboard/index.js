import React, { useState } from 'react';
// import {Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './dashboard.css';
import PieChartComponent from '../../Component/Graph/teller';



function Dashboard() {
    const [currentPage, setCurrentPage] = useState('Home');



    const handleButtonClick = (pageName) => {
        setCurrentPage(pageName);
    };

    const labelStyle = {
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: 'grey',
        color: '#fff',
        border: '1px solid black',
        borderRadius: '4px',
        cursor: 'pointer'
    };


    return (

        <div>
            <div>
                <div class="d-flex flex-row">
                    <div class="col-lg-2 col-md-2">
                        <div class="card card1">
                            <div class=" image d-flex flex-row align-items-center">
                                <img src="https://www.ubagroup.com/wp-content/uploads/2018/09/UBA-logo-5.gif" height="100" width="150" alt='pagination' />
                            </div> <hr class="hline" /> <div class="d-flex flex-column align-items-center" >
                                <button class="btn navbar" onClick={() => handleButtonClick('Home')}>
                                    <span>Dashboard</span></button>
                                <button class="btn navbar" onClick={() => handleButtonClick('About')}>
                                    <i class="fa fa-users"></i><span>Appraised Staffs</span></button>
                                <button class="btn navbar" onClick={() => handleButtonClick('Contact')}>
                                    <i class="fa fa-download" aria-hidden="true"></i> <span>Upload</span></button>
                                <button class="btn navbar">
                                    <span>Knowlwdge</span></button>
                                <button class="btn">
                                    <span>Dashboard</span></button>
                            </div>
                        </div>


                    </div>
                    <div class="col-md-6"> <div class="card card2 p-3">
                        {/* home dashboard page */}
                        {currentPage === 'Home' && <div>

                            <div className='card main-card shadow rounded'>
                                <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                                    <span className='Stafftext'>Total Number Of Outsourced Staff</span> </div>


                                <div class="d-flex flex-row gap-3 p-2 m-2">
                                    <div class="card cardchild mt-3 p-2 px-3 py-2 cchild1">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">Teller</span>
                                                <span class="number">132</span></div> <div class="d-flex flex-column">
                                                {/* <img src="https://i.imgur.com/Slxu74c.png" class="logo1" height="40" width="40" /> */}
                                            </div> </div> </div>
                                    <div class="card cardchild mt-3 p-2 px-2 py-3 cchild2">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">DSE</span><span class="number">120</span>

                                            </div> <div class="d-flex flex-column">


                                                {/* <img src="https://i.imigur.com/7SEdq7z.png" class="logo2" height="40" width="40" /> */}

                                            </div> </div> </div> <div class="card cardchild mt-3 p-2 px-3 py-3 cchild1">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">ancilliary</span><span class="number">25</span></div>
                                            <div class="d-flex flex-column">
                                                {/* <img src="https://i.imgur.com/xvUzRjK.png" class="logo3" height="40" width="40" /> */}
                                            </div> </div> </div>
                                </div>
                            </div>

                            <div className='card main-card shadow-lg rounded'>
                                <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                                    <span className='Stafftext'>Total Number Of Outsourced Staff</span> </div>


                                <div class="d-flex flex-row gap-3 p-2 m-2">
                                    <div class="card cardchild mt-3 p-2 px-3 py-2 cchild1">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">Teller</span>
                                                <span class="number">132</span></div> <div class="d-flex flex-column">
                                                {/* <img src="https://i.imgur.com/Slxu74c.png" class="logo1" height="40" width="40" /> */}
                                            </div> </div> </div>
                                    <div class="card cardchild mt-3 p-2 px-2 py-3 cchild2">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">DSE</span><span class="number">120</span>

                                            </div> <div class="d-flex flex-column">


                                                {/* <img src="https://i.imigur.com/7SEdq7z.png" class="logo2" height="40" width="40" /> */}

                                            </div> </div> </div> <div class="card cardchild mt-3 p-2 px-3 py-3 cchild1">
                                        <div class="d-flex p-2 mt-2 justify-content-between rounded">
                                            <div class="d-flex flex-column"><span class="type">ancilliary</span><span class="number">25</span></div>
                                            <div class="d-flex flex-column">
                                                {/* <img src="https://i.imgur.com/xvUzRjK.png" class="logo3" height="40" width="40" /> */}
                                            </div> </div> </div>
                                </div>
                            </div>
                            <div className='card main-card shadow-lg rounded'>
                                <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                                    <span className='Stafftext'>Staff Statistics</span> </div>

                                <div className='col-lg-2'>

                                    <PieChartComponent />
                                </div>
                            </div>



                        </div>

                        }

                        {currentPage === 'About' && 
                        
                        <div className='card main-card2 shadow-lg rounded'>
                        <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                            <span className='Stafftext'>Staffs are yet to be appraise</span> </div>

                        {/* <div className='m-4'>
                            <div className="file-input-container">
                                <input class="form-control form-control-lg" type="file" placeholder=".form-control-lg" />
                                <label htmlFor="file-input" className="file-input-label m-2">
                                    Choose File
                                </label>
                            </div> */}


                        </div>

                    // </div>
                        
                        }
                        {currentPage === 'Contact' &&


                            // <div className='card main-card shadow-lg rounded'>
                            //     <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                            //         <span className='Stafftext'> Teller Staff Upload </span> </div>

                            //     <div className='m-4'>
                            //         <div className="file-input-container">
                            //             <input class="form-control form-control-lg" type="file" placeholder=".form-control-lg" />
                            //             <label htmlFor="file-input" className="file-input-label m-2">
                            //                 Choose File
                            //             </label>
                            //         </div>
                            //     </div>
                            //    </div>


                            <div>

                                <div className='card main-card2 shadow rounded'>
                                    <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">

                                        <span className='Stafftext'> Teller Staff Upload </span> </div>

                                    <div className='m-4'>
                                        <div className="file-input-container">
                                            <input class="form-control form-control-lg" type="file" placeholder=".form-control-lg" />
                                            <label htmlFor="file-input" className="file-input-label m-2">
                                                Choose File
                                            </label>
                                        </div>


                                    </div>
                                </div>


                                <div className='card main-card2 shadow-lg rounded'>
                                    <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                                        <span className='Stafftext'>Direct Sales Executive Staff</span> </div>

                                    <div className='m-4'>
                                        <div className="file-input-container">
                                            <input class="form-control form-control-lg" type="file" placeholder=".form-control-lg" />
                                            <label htmlFor="file-input" className="file-input-label m-2">
                                                Choose File
                                            </label>
                                        </div>


                                    </div>

                                </div>

                                <div className='card main-card2 shadow-lg rounded'>
                                    <div class="d-flex justify-content-start align-items-center mt-3 Stafftext">
                                        <span className='Stafftext'>Ancilliary Staff Upload</span> </div>

                                    <div className='m-4'>
                                        <div className="file-input-container">
                                            <input class="form-control form-control-lg" type="file" placeholder=".form-control-lg" />
                                            <label htmlFor="file-input" className="file-input-label m-2">
                                                Choose File
                                            </label>
                                        </div>


                                    </div>

                                </div>





                            </div>




                        }
                    </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card main-card shadow-lg rounded mt-4 p-3'>
                            <span className='Stafftext mt-3'>Top performers</span>
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>

                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className='card main-card shadow-lg rounded mt-4 p-3'>
                            <span className='Stafftext mt-3'>Poor Performers</span>
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>

                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>
                    </div>




                </div>


            </div>
        </div>



    );
}

export default Dashboard;