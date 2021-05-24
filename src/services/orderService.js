import axios from "axios";

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: "Barer Token",
// };

const headers = {
  "access-control-expose-headers": "Request-Context",
  "cache-control": "private",
  "content-type": "application/json; charset=utf-8",
  date: "Mon, 24 May 2021 07:01:43 GMT",
  "request-context": "appId=cid-v1:85fdd577-1d92-4f99-8064-50fceb172303",
  server: "Logicbroker",
  "strict-transport-security": "max-age=31536000",
  "x-aspnet-version": "4.0.30319",
  "x-logicbroker-request-limit": "25",
};

export const orderService = {};

orderService.Orders = async () => {
  try {
    let res = await axios.get(
      process.env.REACT_APP_RESERVEBAR_API +
        "/Orders?subscription-key=528D61CA-E652-465F-8310-1645490A0857",
      { headers: headers }
    );
    return res.data ? res.data : [];
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
