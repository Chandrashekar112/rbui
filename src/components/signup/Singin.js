import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import TextFieldGroup from "../common/TextFieldGroup";

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

function Sigin() {
  const classes = useStyles();
  const { register, control } = useForm();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
            <Container maxWidth="sm">
              <Paper className={classes.paper}>
                <h4>Sign In</h4>

                <Grid item lg={12} spacing={2}>
                  <TextFieldGroup
                    label={"firstName"}
                    name={"firstName"}
                    className={classes.textField}
                    control={control}
                    defaultValue={""}
                    register={register}
                    rules={{ required: true }}
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>

                <Grid item lg={12} spacing={2}>
                  <TextFieldGroup
                    label={"firstName"}
                    name={"firstName"}
                    className={classes.textField}
                    control={control}
                    defaultValue={""}
                    register={register}
                    rules={{ required: true }}
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Sigin;
