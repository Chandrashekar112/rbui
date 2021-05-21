import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useForm } from "react-hook-form";
import TextFieldGroup from "../common/TextFieldGroup";
import Button from "@material-ui/core/Button";

import services from "../../services";

import UserList from "./UserList";

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

const CreateUser = () => {
  const classes = useStyles();
  const methods = useForm();
  const { register, control, handleSubmit } = methods;

  const [userList, setUserList] = useState([]);
  const [editUser, setEditUser] = useState({});

  useEffect(() => {
    let masterData = () => {
      services.userServiceAPI
        .getAllUsers()
        .then((response) => setUserList(response.data))
        .catch((error) => console.log(error));
    };
    masterData();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    services.userServiceAPI
      .createUser(data)
      .then((success) => getUserFun())
      .catch((error) => console.log(error));
  };

  const getUserFun = async () => {
    services.userServiceAPI
      .getAllUsers()
      .then((response) => setUserList(response.data))
      .catch((error) => console.log(error));
  };

  const editFun = (user) => {
    setEditUser({ ...user });
    console.log(user);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
            <Container maxWidth="sm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                  <h4>Create User</h4>
                  <input
                    type="text"
                    name={`firstName`}
                    defaultValue={editUser.firstName}
                    {...register("firstName")}
                    placeholder="FirstName"
                  />
                  <input
                    type="text"
                    name={`lastName`}
                    defaultValue={editUser.lastName}
                    {...register("lastName")}
                    placeholder="LastName"
                  />
                  <input
                    type="text"
                    name={`email`}
                    defaultValue={editUser.email}
                    {...register("email")}
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name={`password`}
                    defaultValue={editUser.password}
                    {...register("password")}
                    placeholder="Password"
                  />
                  <input
                    type="text"
                    name={`mobileNo`}
                    defaultValue={editUser.mobileNo}
                    {...register("mobileNo")}
                    placeholder="MobileNo"
                  />
                  <input
                    type="text"
                    name={`address`}
                    defaultValue={editUser.address}
                    {...register("address")}
                    placeholder="Address"
                  />
                  <input type="submit" value="submit" />

                  {/* <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                      label={"FirstName"}
                      name={"firstName"}
                      className={classes.textField}
                      control={control}
                      defaultValue={""}
                      register={register}
                      {...register("firstName")}
                      rules={{ required: true }}
                      margin="dense"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                      label={"LastName"}
                      name={"lastName"}
                      className={classes.textField}
                      control={control}
                      defaultValue={""}
                      register={register}
                      rules={{ required: true }}
                      margin="dense"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                      label={"Email"}
                      name={"email"}
                      className={classes.textField}
                      control={control}
                      defaultValue={""}
                      register={register}
                      rules={{ required: true }}
                      margin="dense"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                      label={"Password"}
                      name={"password"}
                      className={classes.textField}
                      control={control}
                      defaultValue={""}
                      register={register}
                      rules={{ required: true }}
                      margin="dense"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                      label={"Address"}
                      name={"address"}
                      className={classes.textField}
                      control={control}
                      defaultValue={""}
                      register={register}
                      rules={{ required: true }}
                      margin="dense"
                      variant="outlined"
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button> 
                  </Grid>*/}
                </Paper>
              </form>
            </Container>
          </Grid>
        </Grid>
        {/* <UserList userList={userList} editFun={(user) => editFun(user)} /> */}
      </Container>
    </div>
  );
};

export default CreateUser;
