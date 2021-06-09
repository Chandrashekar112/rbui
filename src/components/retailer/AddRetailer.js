import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

import TextFieldGroup from "../common/TextFieldGroup";

import CheckBox from "../common/CheckBox";

import services from "../../services";

import RetailerSettingValidation from "../common/validations/retailerSetting";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  btn: {
    marginRight: "10px",
  },
}));

export default function AddRetailer({
  open,
  scroll,
  descriptionElementRef,
  handleClose,
  editFlag,
  selectedData,
  retailerStateArr,
}) {
  const classes = useStyles();
  const methods = useForm();
  const { errors, control, handleSubmit, setValue, reset } = methods;
  const [retailerState, setRetailerState] = useState({});
  const [include_tax, setIncludeTax] = useState(false);
  const [include_ccfee, setIncludeCCfee] = useState(false);

  useEffect(() => {
    if (selectedData) {
      setRetailerState({ retailer_state: selectedData.retailer_state });
      setValue("company_id", selectedData.company_id);
      setValue("retailer_name", selectedData.retailer_name);
      setValue("shipping_cost_ground", selectedData.shipping_cost_ground);
      setValue("shipping_cost_2day", selectedData.shipping_cost_2day);
      setValue("shipping_cost_overnight", selectedData.shipping_cost_overnight);
      setValue("rb_percent_sales", selectedData.rb_percent_sales);
      setValue("retailer_percent_sales", selectedData.retailer_percent_sales);
      setValue("credit_card_fee_percent", selectedData.credit_card_fee_percent);
      setValue("shipping_fedex", selectedData.shipping_fedex);
      setValue("shipping_non_fedex", selectedData.shipping_non_fedex);
      setValue(
        "retailer_contrib_free_ship",
        selectedData.retailer_contrib_free_ship
      );
      setValue("dw_contrib_free_ship", selectedData.dw_contrib_free_ship);

      let tax = selectedData.include_tax === 1 ? true : false;
      let ccfee = selectedData.include_ccfee === 1 ? true : false;
      setIncludeTax(tax);
      setIncludeCCfee(ccfee);
    } else if (!selectedData) {
      reset({
        company_id: "",
        retailer_name: "",
        // retailer_state: "",
        shipping_cost_ground: "",
        shipping_cost_2day: "",
        shipping_cost_overnight: "",
        rb_percent_sales: "",
        retailer_percent_sales: "",
        credit_card_fee_percent: "",
        shipping_fedex: "",
        shipping_non_fedex: "",
        retailer_contrib_free_ship: "",
        dw_contrib_free_ship: "",
      });
      setRetailerState({});
      setIncludeTax(false);
      setIncludeCCfee(false);
    }
  }, [selectedData]);

  const save = async (data) => {
    console.log(data);
    let setData = data;
    setData.retailer_state = retailerState.retailer_state;
    setData.include_tax = include_tax === true ? 1 : 0;
    setData.include_ccfee = include_ccfee === true ? 1 : 0;

    await services.retailerService
      .AddRetailer(setData)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            handleClose();
          }
        });
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
    console.log(setData);
  };

  const update = async (data) => {
    let setData = data;
    let id = setData.company_id;
    setData.retailer_state = retailerState.retailer_state;
    setData.include_tax = include_tax === true ? 1 : 0;
    setData.include_ccfee = include_ccfee === true ? 1 : 0;

    await services.retailerService
      .UpdateRetailer(id, setData)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            handleClose();
          }
        });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  const onChange = (e, val) => {
    const checked = e.target.checked;
    if (val === "tax") {
      setIncludeTax(checked);
    } else if (val === "ccfee") {
      setIncludeCCfee(checked);
    }
  };

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {editFlag === "Edit" ? "Edit Retailer" : "Add New Retailer"}
        </DialogTitle>
        <form>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="company_id"
                    control={control}
                    defaultValue={""}
                    label="Company Id"
                    className={classes.textField}
                    disabled={editFlag === "Edit" ? true : false}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.company_id}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="retailer_name"
                    control={control}
                    defaultValue={""}
                    label="Retailer Name"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.retailer_name}
                  />
                </Grid>
                <Grid item sm={4}>
                  <Autocomplete
                    size="small"
                    value={retailerState}
                    onChange={(event, newValue) => {
                      setRetailerState(newValue);
                    }}
                    options={retailerStateArr}
                    getOptionLabel={(option) => option.retailer_state}
                    renderInput={(params) => (
                      <Controller
                        render={({ fieldState: { error } }) => (
                          <TextField
                            {...params}
                            name="retailer_state"
                            label="Retailer State"
                            placeholder="Retailer State"
                            margin="dense"
                            variant="outlined"
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                        name="retailer_state"
                        control={control}
                        rules={RetailerSettingValidation.retailer_state}
                      />
                    )}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="shipping_cost_ground"
                    control={control}
                    defaultValue={""}
                    label="Shipping Cost Ground"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.shipping_cost_ground}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="shipping_cost_2day"
                    control={control}
                    defaultValue={""}
                    label="Shipping Cost 2day"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.shipping_cost_2day}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="shipping_cost_overnight"
                    control={control}
                    defaultValue={""}
                    label="Shipping Cost Overnight"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.shipping_cost_overnight}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="rb_percent_sales"
                    control={control}
                    defaultValue={""}
                    label="Rb Percent Sales"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.rb_percent_sales}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="retailer_percent_sales"
                    control={control}
                    defaultValue={""}
                    label="Retailer Percent Sales"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.retailer_percent_sales}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="credit_card_fee_percent"
                    control={control}
                    defaultValue={""}
                    label="Credit Card Fee Percent"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.credit_card_fee_percent}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="shipping_fedex"
                    control={control}
                    defaultValue={""}
                    label="Shipping Fedex"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.shipping_fedex}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="shipping_non_fedex"
                    control={control}
                    defaultValue={""}
                    label="Shipping non fedex"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.shipping_non_fedex}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="retailer_contrib_free_ship"
                    control={control}
                    defaultValue={""}
                    label="Retailer Contrib Free Ship"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.retailer_contrib_free_ship}
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="dw_contrib_free_ship"
                    control={control}
                    defaultValue={""}
                    label="Dw Contrib Free Ship"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    rules={RetailerSettingValidation.dw_contrib_free_ship}
                  />
                </Grid>
                <Grid item sm={2}>
                  <CheckBox
                    label={"Include Tax"}
                    name="include_tax"
                    control={control}
                    defaultValue={""}
                    checked={include_tax}
                    onChange={(e) => onChange(e, "tax")}
                  />
                </Grid>
                <Grid item sm={2}>
                  <CheckBox
                    label={"Include Ccfee"}
                    name="include_ccfee"
                    control={control}
                    checked={include_ccfee}
                    onChange={(e) => onChange(e, "ccfee")}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            {editFlag === "Edit" ? (
              <Button onClick={handleSubmit(update)} color="primary">
                Update
              </Button>
            ) : (
              <Button onClick={handleSubmit(save)} color="primary">
                Save
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
