import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
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
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    let masterData = () => {
      services.userServiceAPI
        .getAllUsers()
        .then((response) => setUserList(response.data))
        .catch((error) => console.log(error));
    };
    masterData();
  }, []);

  const editFun = (user) => {};

  const columns = [
    { field: "_id", headerName: "Id", width: 160 },
    { field: "firstName", headerName: "First Name", width: 160 },
    { field: "lastName", headerName: "Last Name", width: 160 },
    { field: "email", headerName: "Email ", width: 160 },
    { field: "mobileNo", headerName: "Mobile Number", width: 160 },
    { field: "address", headerName: "Address", width: 160 },
    { field: "", headerName: "Actions", width: 160 },
  ];

  // console.log(userList);

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
                    checkboxSelection
                  />
                </div>
                {/* <tabel style={{ border: " 1px solid black" }}>
                  <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>lastName</th>
                      <th>Email</th>
                      <th>Mobile Numner</th>
                      <th>Address</th>
                      <th>Created Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody style={{ border: " 1px solid black" }}>
                    {userList.length > 0
                      ? userList.map((user, i) => (
                          <tr key={i}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.address}</td>
                            <td>{user.created}</td>
                            <td>
                              <button onClick={() => editFun(user)}>
                                Edit
                              </button>
                            </td>
                            <td>
                              <button onClick={() => deleteFun(user._id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </tabel> */}
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserList;
