import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import TextFieldGroup from "../../common/TextFieldGroup";

import SigninValidation from "../../common/validations/signin";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
      color: theme.palette.text.secondary,
    margin:"80px auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Signup=()=> {
  const classes = useStyles();
    const methods = useForm();
    const { register, control, handleSubmit, setValue, reset } = methods;
    const save = (data) => {
        console.log(data);
        
    }
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
             <Container maxWidth="sm">
              <Paper className={classes.paper}>
                <h2 style={{color:"#3f51b5"}}>Sign Up </h2>
                <form>
                <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="first_name"
                  control={control}
                  defaultValue={""}
                  label="First Name"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
                </Grid>
                                  
                <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="last_name"
                  control={control}
                  defaultValue={""}
                  label="Last Name"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
                 </Grid>
                                  
                 <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="email"
                  control={control}
                  defaultValue={""}
                  label="Email Id"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
                </Grid>
                                  
                <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="password"
                  control={control}
                  defaultValue={""}
                  label="password"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
                </Grid>
                                  
                <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="phoneNo"
                  control={control}
                  defaultValue={""}
                  label="Phone Number"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
             </Grid>
                                  
                 <Grid item sm={12} spacing={2}>
                <TextFieldGroup
                  name="address"
                  control={control}
                  defaultValue={""}
                  label="Address"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
             </Grid>
                                  
                <Grid item sm={12} spacing={2}>
                 {/* <TextFieldGroup
                  name="password"
                  control={control}
                  defaultValue={""}
                  label="Password"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  rules={SigninValidation.password}
             /> */}
             <Button type="submit" variant="contained" color="primary" size="small" style={{ marginTop: "10px" }} onClick={handleSubmit(save)}>Submit
            </Button> 
                  </Grid>
                  
                 </form>
                 </Paper>
                
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
