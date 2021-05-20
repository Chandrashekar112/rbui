import axios from "axios";

export const userServiceAPI = {};

const headers = {
  "Content-Type": "application/json",
  Authorization: "Barer Token",
};

userServiceAPI.createUser = async (data) => {
  try {
    let res = await axios.post(`http://localhost:8080/users`, data, {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

userServiceAPI.getAllUsers = async () => {
  try {
    let res = await axios.get("http://localhost:8080/users", {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
