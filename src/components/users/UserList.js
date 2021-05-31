import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import { DataGrid } from "@material-ui/data-grid";

import services from "../../services";

import CreateUser from "./CreateUser";

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

const UserList = () => {
  const classes = useStyles();
  const methods = useForm();
  const [userList, setUserList] = useState([
    {
      _id: 1,
      firstName: "user",
      lastName: "simth",
      email: "user@gmail.com",
      mobileNo: "9999999999",
      address: "HYD",
    },
    {
      _id: 2,
      firstName: "user2",
      lastName: "sam",
      email: "sam@gmail.com",
      mobileNo: "8888888888",
      address: "BLR",
    },
  ]);

  const actionButton = (params) => {
    // console.log(params.id);

    return (
      <div>
        <button onClick={() => editUser(params)}>Edit</button>
        <button onClick={() => deleteUser(params)}>Delete</button>
      </div>
    );
  };

  const editUser = async (props) => {
    console.log("edit user", props);
  };

  const deleteUser = (props) => {
    console.log("delete user", props);
  };

  const columns = [
    { field: "_id", headerName: "Id", width: 160 },
    { field: "firstName", headerName: "First Name", width: 160 },
    { field: "lastName", headerName: "Last Name", width: 160 },
    { field: "email", headerName: "Email ", width: 160 },
    { field: "mobileNo", headerName: "Mobile Number", width: 160 },
    { field: "address", headerName: "Address", width: 160 },
    {
      field: "",
      headerName: "Actions",
      renderCell: actionButton,
      width: 160,
    },
  ];

  useEffect(() => {
    let masterData = () => {
      services.userServiceAPI
        .getAllUsers()
        .then((response) => setUserList(response.data))
        .catch((error) => console.log(error));
    };
    masterData();
  }, []);

  const userData = () => {
    let users = userList.map((item, i, a) => (a[i] = { id: i + 1, ...item }));
    return users;
  };

  const deleteFun = (index) => {
    console.log(index);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
            <Container maxWidth="xl">
              <Paper className={classes.paper}>
                <CreateUser />
                <h4>User List</h4>
                <div style={{ height: 250, width: "100%" }}>
                  <DataGrid
                    columns={columns}
                    rows={userData()}
                    pageSize={5}
                    // checkboxSelection
                  />
                </div>
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserList;
