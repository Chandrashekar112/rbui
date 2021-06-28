import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Radio from "@material-ui/core/Radio";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import { useForm} from "react-hook-form";

import services from "../../../services";

import DataTable from "../../common/DataTable";


import AddRetailer from "./AddRetailer";

import { Mastercontext } from "../../useContext/MasterContext";

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
  const [searchObj, setSearchObj] = useState({});
  const [companyid, setCompanyId] = useState({});
  const [retailerName, setRetailerName] = useState({});
  const [retailerState, setRetailerState] = useState({});
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [editFlag, setEditFlag] = useState("");
  const { masterData, setMasterData } = useContext(Mastercontext);

  const handleChange = (props) => {
    console.log(props);
    setSelectedValue(props);
  };

  const actionButton = (params) => {
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

  const header = (head) => {
    return (
      <span className="p-column-title" style={{ width: "60%", float: "left" }}>
        <div>
          <span className="p-column-title token-anchor">{head} </span>
        </div>
      </span>
    );
  };

  const columns = [
    {
      field: "",
      header: "",
      sortable: false,
      headerStyle: { width: "80px" },
    },
    {
      field: "company_id",
      header: header("Company Id"),
      sortable: true,
      headerStyle: { width: "100px" },
    },
    {
      field: "retailer_name",
      header: header("Retailer Name"),
      sortable: true,
      headerStyle: { width: "180px" },
    },
    {
      field: "retailer_state",
      header: header("Retailer State"),
      sortable: true,
      headerStyle: { width: "150px" },
    },

    {
      field: "shipping_cost_ground",
      header: header("Shipping Cost Ground "),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_cost_2day",
      header: header("Shipping Cost 2 day"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_cost_overnight",
      header: header("Shipping Cost Overnight"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "rb_percent_sales",
      header: header("RB Percent Sales"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "retailer_percent_sales",
      header: header("Retailer  Percent Sales"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "credit_card_fee_percent",
      header: header("credit card Fee percent"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_fedex",
      header: header("shipping Fedex"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_non_fedex",
      header: header("Shipping non Fedex"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "retailer_contrib_free_ship",
      header: header("Retailer Contrib Free Ship"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "dw_contrib_free_ship",
      header: header("Dw Contrib Free Ship"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "include_tax",
      header: header("Include Tax"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "include_ccfee",
      header: header("Include ccfee"),
      sortable: true,
      headerStyle: { width: "150px" },
    },
  ];

  useEffect(() => {
    serviceFun();
  }, []);

  const serviceFun = async() => {
    await services.retailerService
    .RetailerSetting()
    .then((response) => searchFun(response.data.data))
    .catch((error) => console.log(error));
}


  const searchFun = async (data) => {
    setRetailer(data);
    const searchObj = {
      companyIds: [],
      retailerName: [],
      retailerState: [],
    };
    searchObj.companyIds = data.filter((item, i) => {
      if (item.company_id) {
        return item;
      }
    });

    searchObj.retailerName = data.filter((item, i) => {
      if (item.retailer_name) {
        return item;
      }
    });
    searchObj.retailerName.sort((a, b) => {
      return a.retailer_name.localeCompare(b.retailer_name);
    });

    let uniquevalues = Array.from(
      new Set(data.map((a) => a.retailer_state))
    ).map((id) => {
      return data.find((a) => a.retailer_state === id);
    });

    searchObj.retailerState = uniquevalues.filter((item, i) => {
      if (item.retailer_state && !(item.retailer_state === "-")) {
        return item;
      }
    });

    searchObj.retailerState.sort((a, b) => {
      return a.retailer_state.localeCompare(b.retailer_state);
    });

    await setSearchObj(searchObj);
  };

  const userData = () => {
    let users = retailer.map((item, i, a) => (a[i] = { id: i + 1, ...item }));
    return users;
  };

  const onSubmit = async (data) => {
    setSelectedValue({});
    let searchValues = {};
    if (companyid && companyid.company_id) {
      searchValues.company_id = companyid;
    } else if (retailerName && retailerName.retailer_name) {
      searchValues.retailer_name = retailerName;
    } else if (retailerState && retailerState.retailer_state) {
      searchValues.retailer_state = retailerState;
    }
    setretailerSearchObj(searchValues);
    filterData();
  };

  const filterData = () => {
    const filterModel = {};
    let obj = {
      ...retailerSearchObj.company_id,
      ...retailerSearchObj.retailer_name,
      ...retailerSearchObj.retailer_state,
    };
    if (retailerSearchObj && retailerSearchObj.company_id) {
      filterModel.company_id = { value: obj.company_id };
    } else if (retailerSearchObj && retailerSearchObj.retailer_name) {
      filterModel.retailer_name = { value: obj.retailer_name };
    } else if (retailerSearchObj && retailerSearchObj.retailer_state) {
      filterModel.retailer_state = { value: obj.retailer_state };
    }
    return filterModel;
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

  const modifyColums = (rowData, col) => {
    switch (col.field) {
      case "":
        return actionButton(rowData);
      default:
        return <div className="token-anchor">{rowData[col.field]}</div>;
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{ marginBottom: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <Autocomplete
                name="company_id"
                size="small"
                value={companyid}
                onChange={(event, newValue) => {
                  setCompanyId(newValue);
                }}
                options={
                  searchObj && searchObj.companyIds ? searchObj.companyIds : []
                }
                getOptionLabel={(option) => option.company_id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Company Id"
                    placeholder="Company Id"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={3}>
              <Autocomplete
                name="retailer_name"
                value={retailerName}
                onChange={(event, newValue) => {
                  setRetailerName(newValue);
                }}
                options={
                  searchObj && searchObj.retailerName
                    ? searchObj.retailerName
                    : []
                }
                size="small"
                getOptionLabel={(option) => option.retailer_name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Retailer Name"
                    placeholder="Retailer Name"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
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
              />
            </Grid>
            <Grid item sm={2}>
              <Autocomplete
                name="retailer_state"
                size="small"
                value={retailerState}
                onChange={(event, newValue) => {
                  setRetailerState(newValue);
                }}
                // options={retailer}
                options={
                  searchObj && searchObj.retailerState
                    ? searchObj.retailerState
                    : []
                }
                getOptionLabel={(option) => option.retailer_state}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Retailer State"
                    placeholder="Retailer State"
                    className={classes.textField}
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

      <Paper className={classes.paper}>
        <DataTable
          columns={columns}
          rows={userData()}
          filterModel={filterData()}
          modifyColums={(rowData, col) => modifyColums(rowData, col)}
        />
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
              disabled={!(selectedValue && selectedValue.id) ? true : false}
              onClick={handleClickOpen("paper", "Edit")}
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
          // selectedData={selectedValue ? selectedValue.row : {}}
          selectedData={selectedValue}
          retailerStateArr={
            searchObj && searchObj.retailerState ? searchObj.retailerState : []
          }
          serviceFun={serviceFun}
        />
      ) : editFlag === "new" ? (
        <AddRetailer
          open={open}
          scroll={scroll}
          descriptionElementRef={descriptionElementRef}
          handleClose={handleClose}
          retailerStateArr={
            searchObj && searchObj.retailerState ? searchObj.retailerState : []
          }
          serviceFun={serviceFun}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Orders;
