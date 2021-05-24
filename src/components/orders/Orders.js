import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import { DataGrid } from "@material-ui/data-grid";

import services from "../../services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Orders = () => {
  const classes = useStyles();
  const methods = useForm();
  const [orders, setOrders] = useState([]);

  const actionButton = (params) => {
    // console.log(params.id);

    return (
      <div>
        <button onClick={() => editUser(params)}>Edit</button>
      </div>
    );
  };

  const editUser = async (props) => {
    console.log("edit user", props);
  };

  const columns = [
    { field: "SenderCompanyId", headerName: "Sender CompanyId", width: 160 },
    {
      field: "ReceiverCompanyId",
      headerName: "Receiver CompanyId",
      width: 160,
    },
    { field: "OrderNumber", headerName: "Order Number", width: 160 },
    { field: "CustomerNumber", headerName: "Customer Number", width: 160 },
    { field: "PartnerPO", headerName: "Partner PO ", width: 160 },
    { field: "OrderDate", headerName: "Order Date", width: 160 },
    { field: "Currency", headerName: "Currency", width: 160 },
    { field: "TotalAmount", headerName: "Total Amount", width: 160 },
    { field: "HandlingAmount", headerName: "Handling Amount", width: 160 },
    { field: "DropshipAmount", headerName: "Dropship Amount", width: 160 },
    { field: "StatusCode", headerName: "StatusCode", width: 160 },
    {
      field: "",
      headerName: "Actions",
      renderCell: actionButton,
      width: 160,
    },
  ];

  useEffect(() => {
    let masterData = () => {
      services.orderService
        .Orders()
        .then((response) => setOrders(response.Records))
        .catch((error) => console.log(error));
    };
    masterData();
  }, []);

  const userData = () => {
    let users = orders.map((item, i, a) => (a[i] = { id: i + 1, ...item }));
    return users;
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h3>Orders</h3>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={userData()}
            checkboxSelection
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            pagination
          />
        </div>
      </Paper>
    </div>
  );
};

export default Orders;
