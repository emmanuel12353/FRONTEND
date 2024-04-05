import axios from 'axios';


const API_BASE_URL = 'https://reqres.in/api/users';

// http://localhost:5000/v1/login
// https://reqres.in/api/users



export const loginUser = async (Credentials) =>{
    try{
        const response = await axios.post(API_BASE_URL, Credentials);
        return response.data;
    } catch(error) {
        throw error.response.data
    }

}


export const signUser = async (userData) =>{
    try{
        const response = await axios.post('${API_BASE_URL}', userData);
        return response.data;
    } catch(error) {
        throw error.response.data
    }
}