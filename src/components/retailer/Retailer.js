import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";

import services from "../../services";

import DataTable from "../common/DataTable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  btn: {
    marginRight: "10px",
  },
}));

const Orders = () => {
  const classes = useStyles();
  const methods = useForm();
  const { register, control, handleSubmit } = methods;
  const [retailer, setRetailer] = useState([]);
  const [retailerSearchObj, setretailerSearchObj] = useState({});

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
    { field: "company_id", headerName: "Company Id", width: 160 },
    {
      field: "retailer_name",
      headerName: "Retailer Name",
      width: 160,
    },
    { field: "retailer_state", headerName: "Retailer State", width: 160 },

    {
      field: "shipping_cost_ground",
      headerName: "Shipping Cost Ground ",
      width: 160,
    },
    {
      field: "shipping_cost_2day",
      headerName: "Shipping Cost 2 day",
      width: 160,
    },
    {
      field: "shipping_cost_overnight",
      headerName: "Shipping Cost Overnight",
      width: 160,
    },
    { field: "rb_percent_sales", headerName: "RB Percent Sales", width: 160 },
    {
      field: "retailer_percent_sales",
      headerName: "Retailer  Percent Sales",
      width: 160,
    },
    {
      field: "credit_card_fee_percent",
      headerName: "credit card Fee percent",
      width: 160,
    },
    { field: "shipping_fedex", headerName: "shipping Fedex", width: 160 },
    {
      field: "shipping_non_fedex",
      headerName: "Shipping non Fedex",
      width: 160,
    },
    {
      field: "retailer_contrib_free_ship",
      headerName: "Retailer Contrib Free Ship",
      width: 160,
    },
    {
      field: "dw_contrib_free_ship",
      headerName: "Dw Contrib Free Ship",
      width: 160,
    },
    { field: "include_tax", headerName: "Include Tax", width: 160 },
    { field: "include_ccfee", headerName: "Include ccfee", width: 160 },
    {
      field: "",
      headerName: "Actions",
      renderCell: actionButton,
      width: 100,
    },
  ];

  useEffect(() => {
    let masterData = async () => {
      await services.retailerService
        .RetailerSetting()
        .then((response) => setRetailer(response.data.data))
        .catch((error) => console.log(error));
    };
    masterData();
  }, []);

  const userData = () => {
    let users = retailer.map((item, i, a) => (a[i] = { id: i + 1, ...item }));
    return users;
  };

  const onSubmit = async (data) => {
    console.log(data);
    setretailerSearchObj(data);
    filterData();
  };

  const handelsubmitDataFile = (data) => {
    console.log(data);
  };

  const filterData = () => {
    const filterModel = {};
    filterModel.items = [];
    if (retailerSearchObj.company_id) {
      filterModel.items[0] = {
        columnField: "company_id",
        value: retailerSearchObj.company_id,
      };
    } else if (retailerSearchObj.retailer_name) {
      filterModel.items[0] = {
        columnField: "retailer_name",
        operatorValue: "contains",
        value: retailerSearchObj.retailer_name,
      };
    } else if (retailerSearchObj.retailer_state) {
      filterModel.items[0] = {
        columnField: "retailer_state",
        operatorValue: "contains",
        value: retailerSearchObj.retailer_state,
      };
    }
    console.log(filterModel);
    return filterModel;
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
        <h2>Retailer Setting </h2>
      </Paper>

      <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <Controller
                name="company_id"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  // fieldState: { error },
                }) => (
                  <TextField
                    label="Company Id"
                    value={value}
                    className={classes.textField}
                    onChange={onChange}
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={2}>
              <Controller
                name="retailer_name"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Retailer Name"
                    value={value}
                    className={classes.textField}
                    onChange={onChange}
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={2}>
              <Controller
                name="retailer_state"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Retailer State"
                    value={value}
                    onChange={onChange}
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "9px", marginRight: "10px" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* <Button
                type="submit"
                variant="contained"
                color="default"
                style={{ marginTop: "9px", marginRight: "10px" }}
              >
                Clear
              </Button> */}

      <Paper className={classes.paper}>
        <div style={{ height: 500, width: "100%" }}>
          <DataTable
            columns={columns}
            rows={userData()}
            filterModel={filterData()}
          />
        </div>
      </Paper>

      <Paper className={classes.paper} style={{ marginTop: "10px" }}>
        <Grid container spacing={2}>
          <Grid item sm={9}></Grid>
          <Grid item sm={3}>
            <Button
              className={classes.btn}
              variant="contained"
              size="small"
              color="primary"
            >
              Add New Retailer
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              size="small"
              color="primary"
              disabled
            >
              Edit
            </Button>
            <Button variant="contained" color="primary" size="small" disabled>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Orders;
