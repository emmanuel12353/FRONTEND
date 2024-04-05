import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { loginUser } from "../API/authApi";



export interface UserStateType {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    createdAt: any;
    score: null;
    uid: string;
    updatedAt?: any;
  } | null;
}
const initialState: UserStateType = {
  name: "user",
  isAuthenticated: false,
  loading: false,
   error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error= null
        },
        setLogout: (state)=>{
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error= null;
        },
        setloading: (state) =>{
            state.loading = true;
        },
        setError: (state, action) => {
         state.error = action.payload;
         state.loading = false;
        },
        
    },
    
});

export const { setUser, setLogout, setloading, setError } = userSlice.actions;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export default userSlice.reducer;

