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
  const { control, handleSubmit } = methods;
  const [selectObj, setSelectObj] = useState({});

  useEffect(() => {
    const resetData = async () => {
      if (selectedData) {
        setSelectObj(selectedData);
      } else {
        setSelectObj({});
      }
    };
    resetData();
  }, [selectedData]);

  const Save = (data) => {
    console.log(data);
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
                    defaultValue={selectObj.company_id}
                    label="Company Id"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={4}>
                  <TextFieldGroup
                    name="retailer_name"
                    control={control}
                    defaultValue={selectObj.retailer_name}
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
                    defaultValue={selectObj.retailer_state}
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
                    defaultValue={selectObj.shipping_cost_ground}
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
                    defaultValue={selectObj.shipping_cost_2day}
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
                    defaultValue={selectObj.shipping_cost_overnight}
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
                    defaultValue={selectObj.rb_percent_sales}
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
                    defaultValue={selectObj.retailer_percent_sales}
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
                    defaultValue={selectObj.credit_card_fee_percent}
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
                    defaultValue={selectObj.shipping_fedex}
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
                    defaultValue={selectObj.shipping_non_fedex}
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
                    defaultValue={selectObj.retailer_contrib_free_ship}
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
                    defaultValue={selectObj.dw_contrib_free_ship}
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
                    defaultValue={selectObj.include_tax}
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
                    defaultValue={selectObj.include_ccfee}
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
