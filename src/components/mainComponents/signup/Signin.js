import React from "react";
import {withRouter, Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

import TextFieldGroup from "../../common/TextFieldGroup";
import CheckBox from "../../common/CheckBox";

import SigninValidation from "../../common/validations/signin";

import services from "../../../services";

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Sigin=(props)=> {
  const classes = useStyles();
    const methods = useForm();
  const { register, control, handleSubmit, setValue, reset } = methods;
  

  const save =async (data) => {
    console.log(data);
//     await services.loginService.login(data).then((response) => {
//       console.log(response.data.data);
//  let redeirectPath = `/dashboard`;
//     props.history.push(redeirectPath);
//     })
//       .catch((err) => console.log(err));
    
      let redeirectPath = `/dashboard`;
      props.history.push(redeirectPath);
   
  }
  

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                      <Container maxWidth="sm">
              <Paper className={classes.paper}>
                <h2 style={{color:"#3f51b5"}}> Sign In</h2>
                <form>
                <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                        type="email"
                      name="email"
                  control={control}
                  defaultValue={""}
                  label="User Name"
                    className={classes.textField}
                  margin="dense"
                  variant="outlined"
                //  rules={SigninValidation.userId}
                />
                </Grid>

                <Grid item sm={12} spacing={2}>
                    <TextFieldGroup
                        type="password"
                      name="password"
                  control={control}
                  defaultValue={""}
                  label="Password"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  // rules={SigninValidation.password}
             />
             </Grid>

                  {/* <Grid item sm={4}>
                  <CheckBox
                    label={"Include Ccfee"}
                    name="include_ccfee"
                    control={control}
                    // checked={include_ccfee}
                    // onChange={(e) => onChange(e, "ccfee")}
                  />
                    </Grid> */}

                  <Grid item sm={12} spacing={2}>
                  <Button type="submit" variant="contained" color="primary" size="small" style={{ marginTop: "10px" }}   className={classes.submit} onClick={handleSubmit(save)}>Submit
                    </Button>
                   <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
                 <Grid item>
                      {/* to={`/signup`} */}
              <Link variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
               </Grid>
               </Grid>
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

export default withRouter(Sigin);
