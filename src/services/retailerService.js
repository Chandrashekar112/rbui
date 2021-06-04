import axios from "axios";

export const retailerService = {};

const headers = {
  "Content-Type": "application/json",
  Authorization: "Barer Token",
};

retailerService.RetailerSetting = async () => {
  try {
    let res = await axios.get(
      process.env.REACT_APP_RESERVEBAR_API + "/retailer",
      {
        headers: headers,
      }
    );
    // console.log(res.data);
    return res ? res : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

retailerService.AddRetailer = async (data) => {
  try {
    let res = axios.post(
      process.env.REACT_APP_RESERVEBAR_API + "/retailer/addRetailer",
      data,
      { headers: headers }
    );
    return res ? res.data : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
