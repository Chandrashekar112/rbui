import axios from 'axios';

export const loginService = {};

const headers = {
    "Content-Type": "application/json",
    Authorization: "Barer Token",
  };

loginService.login = async(data) => {
    try {
        let res = axios.post(process.env.REACT_APP_RESERVEBAR_API + '/login', data, { headers: headers });
        return res ? res : [];
        
    } catch (err) {
        throw err.response ? err.response.data : err;
    }
}