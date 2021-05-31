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

// retailerService.RetailerSearch = async (id) => {
//   try {
//     let res = await axios.get(
//       process.env.REACT_APP_RESERVEBAR_API + "/retailer/company_id=" + id,
//       {
//         headers: headers,
//       }
//     );
//     // console.log(res.data);
//     return res ? res : [];
//   } catch (err) {
//     throw err.response ? err.response.data : err;
//   }
// };
