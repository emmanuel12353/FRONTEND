

import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { loginUser } from "../API/authApi";



export interface AppstaffStateType {
  appraised: {
    staffId: String;
    email: string;
    firstName: string;
    lastName: string;
    costCode: Number;
    score: null;
  } | null;
}
const initialState: AppstaffStateType = {
  name: "appraised",
  loading: false,
   error: null,
};

const appraisedSlice = createSlice({
    name: 'appraised',
    initialState,
    reducers: {
        setAppraised: (state, action)=>{
            state.appStaff = action.payload;
            state.loading = false;
        },
        
    },
    
});

export const { setAppraised } = appraisedSlice.actions;


export default appraisedSlice.reducer;