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
    let res = await axios.post(
      process.env.REACT_APP_RESERVEBAR_API + "/retailer/addRetailer",
      data,
      { headers: headers }
    );

    return res ? res : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

retailerService.RetailerStates = async () => {
  try {
    let res = await axios.get(
      process.env.REACT_APP_RESERVEBAR_API + "/retailer/retailer_state",
      { headers: headers }
    );
    return res ? res : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

retailerService.UpdateRetailer = async (id, data) => {
  try {
    let res = await axios.put(
      process.env.REACT_APP_RESERVEBAR_API + `/retailer/${id}`,
      data,
      { headers: headers }
    );
    return res ? res : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
