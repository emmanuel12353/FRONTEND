import React from "react";
import './heroe.css';
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import app from './app.png';


const Heroe = () => {

  const user = useAppSelector((state) => state.user);

  return (
    <div className="">
        <div class="container my-2">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-5 p-3 p-lg-5 pt-lg-3">
              <div class="display-4 fw-bold lh-4">Performance Appraisal-Outsourced Staff</div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-3 mb-lg-3">
                <button type="button" class="btn  btn-lg x-2 me-md-2 fw-bold appraise-btn1">Appraise staff</button>
                <button type="button" class="btn  btn-lg px-2 me-md-2 fw-bold appraise-btn1">appraised staff</button>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 p-0 overflow-hidden">
              <img class="rounded-lg-3" src={app} alt="" width="100%" />
            </div>
          </div>
        </div>

      </div>

      );
}

      export default Heroe;
