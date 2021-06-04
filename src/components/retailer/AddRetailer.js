import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Grid from "@material-ui/core/Grid";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

import TextFieldGroup from "../common/TextFieldGroup";

import services from "../../services";

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
}) {
  const classes = useStyles();
  const methods = useForm();
  const { control, handleSubmit, setValue, reset } = methods;

  useEffect(() => {
    // const resetData = async () => {};

    // resetData();

    if (selectedData) {
      setValue("company_id", selectedData.company_id);
      setValue("retailer_name", selectedData.retailer_name);
      setValue("retailer_state", selectedData.retailer_state);
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
      setValue("include_tax", selectedData.include_tax);
      setValue("include_ccfee", selectedData.include_ccfee);

      // "include_ccfee",
      // selectedData.include_ccfee
    } else if (!selectedData) {
      reset({
        company_id: "",
        retailer_name: "",
        retailer_state: "",
        shipping_cost_2day: "",
        shipping_cost_overnight: "",
        rb_percent_sales: "",
        retailer_percent_sales: "",
        credit_card_fee_percent: "",
        shipping_fedex: "",
        shipping_non_fedex: "",
        retailer_contrib_free_ship: "",
        dw_contrib_free_ship: "",
        include_tax: "",
        include_ccfee: "",
      });
    }
  }, [selectedData]);

  const Save = async (data) => {
    await services.retailerService
      .AddRetailer(data)
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
    console.log(data);
  };

  console.log(selectedData);
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
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="retailer_state"
                    control={control}
                    defaultValue={""}
                    label="Retailer State"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
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
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="include_tax"
                    control={control}
                    defaultValue={""}
                    label="Include Tax"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="include_ccfee"
                    control={control}
                    defaultValue={""}
                    label="Include Ccfee"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit(Save)} color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
