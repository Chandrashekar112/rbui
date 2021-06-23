import React, { useState, useEffect, useContext } from 'react';
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

import TextFieldGroup from "../../common/TextFieldGroup";

import CheckBox from "../../common/CheckBox";

import services from "../../../services";

import SupplierBrandsValidation from "../../common/validations/supplierBrands";

import { Mastercontext } from "../../useContext/MasterContext";

const useStyles = makeStyles((theme) => ({
  
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    btn: {
      marginRight: "10px",
    },
  }));

const AddSupplier = ({  open,
    scroll,
    descriptionElementRef,
    handleClose,
    editFlag,
    selectedData,
  retailerStateArr
}) => {
        const classes = useStyles();
        const methods = useForm();
        const { register, control, handleSubmit, setValue, reset } = methods;
        const [retailerState, setRetailerState] = useState({});
        const [include_tax, setIncludeTax] = useState(false);
        const [include_ccfee, setIncludeCCfee] = useState(false);
  const { masterData, setMasterData } = useContext(Mastercontext);

  useEffect(() => {
    if (selectedData) {
      console.log(selectedData);
      setValue("supplier", selectedData.supplier);
      setValue("brand", selectedData.brand);
     
    
    } else if (!selectedData) {
      reset({
        supplier: "",
        brand: "",
      
      });
    }
  },[selectedData])

  const save = async (data) => {
    console.log(data);

  }

  const update = async (data) => {

  }

    return   (<div>
    <Dialog
      maxWidth="lg"
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        {editFlag === "Edit" ? "Edit Supplier" : "Add New Retailer"}
      </DialogTitle>
      <form>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <Grid container spacing={2} style={{width:"800px"}}>
              <Grid item sm={6} >
                <TextFieldGroup
                  name="brand"
                  control={control}
                  defaultValue={""}
                  label="Brand"
                    className={classes.textField}
                    disabled={editFlag === "Edit" ? true : false}
                  margin="dense"
                  variant="outlined"
                //   rules={RetailerSettingValidation.retailer_name}
                />
                </Grid>

                <Grid item sm={6} >
                <TextFieldGroup
                  name="supplier"
                  control={control}
                  defaultValue={""}
                  label="Supplier"
                  className={classes.textField}
                  margin="dense"
                  variant="outlined"
                  rules={SupplierBrandsValidation.supplier}
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
  </div>)
}

export default AddSupplier;