import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slice/authSlice";
import appraisedReducer from '../Slice/AppraiseSlice'

import authReducer from "../Slice/authSlice"; 

export const store = configureStore({
    reducer: {
        user: authReducer,
        staffAppraisal: appraisedReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>