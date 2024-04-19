import axios from 'axios';


const API_BASE_URL = 'http://localhost:8000';

// http://localhost:5000/v1/login
// https://reqres.in/api/users






export const Appraised = async (appraisal) =>{
    try{
        const response = await axios.post('/v1/staff/apppraisal', appraisal);
        console.log(response)
        return response;
    } catch(error) {
        throw error.response.data
    }
}


export const getStaff = async (userData) =>{
    try{
        const response = await axios.get('http://localhost:8000/v1/dse');
        return response;
    } catch(error) {
        throw error.response.data
    }
}