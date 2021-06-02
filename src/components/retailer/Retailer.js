import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Radio from "@material-ui/core/Radio";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import { useForm, Controller } from "react-hook-form";

import services from "../../services";

import DataTable from "../common/DataTable";

import TextFieldGroup from "../common/TextFieldGroup";

import AddRetailer from "./AddRetailer";

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
  const { control, handleSubmit } = methods;
  const [retailer, setRetailer] = useState([]);
  const [retailerSearchObj, setretailerSearchObj] = useState({});
  const [selectedValue, setSelectedValue] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editFlag, setEditFlag] = useState("");

  const handleChange = (props) => {
    setSelectedValue(props);
  };

  const actionButton = (params) => {
    // console.log(params.id);
    return (
      <div>
        <Radio
          checked={selectedValue.id === params.id}
          onChange={() => handleChange(params)}
          value="d"
          color="primary"
          name="radio-button-demo"
          inputProps={{ "aria-label": selectedValue.id }}
        />
      </div>
    );
  };

  const columns = [
    {
      field: "",
      headerName: "",
      renderCell: actionButton,
      width: 70,
    },
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
    setSelectedValue({});
    setretailerSearchObj(data);
    filterData();
  };

  const filterData = () => {
    const filterModel = {};
    filterModel.items = [];
    if (retailerSearchObj.company_id) {
      filterModel.items[0] = {
        columnField: "company_id",
        operatorValue: "equals",
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

  /*edit retailer setting function */
  const editRetailer = (params) => {
    console.log(params.row);
  };

  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClickOpen = (scrollType, flag) => () => {
    setOpen(true);
    setScroll(scrollType);
    setEditFlag(flag);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
        <h2>Retailer Setting List </h2>
      </Paper> */}

      <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <TextFieldGroup
                name="company_id"
                control={control}
                defaultValue=""
                label="Company Id"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only allowed numbers",
                  },
                }}
              />

              {/* <Autocomplete
                name="company_id"
                inputValue={searchObj.company_id}
                onInputChange={(event, newValue) => {
                  setSearchObj({ ...{ company_id: newValue } });
                }}
                size="small"
                options={company_ids}
                getOptionLabel={(option) => option.company_id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Company Id"
                    placeholder="Company Id"
                  />
                )}
              /> */}
            </Grid>
            <Grid item sm={2}>
              <TextFieldGroup
                name="retailer_name"
                control={control}
                defaultValue=""
                label="Retailer Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                rules={{
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Only allowed Uppercase and lowercase letters",
                  },
                }}
              />

              {/* <Autocomplete
                name="retailer_name"
                inputValue={searchObj.retailer_name}
                onInputChange={(event, newValue) => {
                  setSearchObj({ ...{ retailer_name: newValue } });
                }}
                options={retailer}
                size="small"
                getOptionLabel={(option) => option.retailer_name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Retailer Name"
                    placeholder="Retailer Name"
                  />
                )}
                renderOption={(option, { inputValue }) => {
                  const matches = match(option.retailer_name, inputValue);
                  const parts = parse(option.retailer_name, matches);

                  return (
                    <div>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{ fontWeight: part.highlight ? 700 : 400 }}
                        >
                          {part.text}
                        </span>
                      ))}
                    </div>
                  );
                }}
              /> */}
            </Grid>
            <Grid item sm={2}>
              <TextFieldGroup
                name="retailer_state"
                control={control}
                defaultValue=""
                label="Retailer State"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                rules={{
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Only allowed Uppercase and lowercase letters",
                  },
                }}
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
          <Grid item sm={8}></Grid>
          <Grid item sm={4}>
            <Button
              className={classes.btn}
              variant="contained"
              size="small"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleClickOpen("paper", "new")}
            >
              Add New Retailer
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              size="small"
              color="primary"
              startIcon={<EditIcon />}
              disabled={!selectedValue ? true : false}
              onClick={handleClickOpen("body", "Edit")}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {editFlag === "Edit" ? (
        <AddRetailer
          open={open}
          scroll={scroll}
          descriptionElementRef={descriptionElementRef}
          handleClose={handleClose}
          editFlag={editFlag}
          selectedData={selectedValue ? selectedValue.row : {}}
        />
      ) : editFlag === "new" ? (
        <AddRetailer
          open={open}
          scroll={scroll}
          descriptionElementRef={descriptionElementRef}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Orders;
