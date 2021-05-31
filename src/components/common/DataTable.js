import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridDensitySelector,
  useGridSlotComponentProps,
} from "@material-ui/data-grid";

import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      color="primary"
      //   variant="outlined"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridFilterToolbarButton />
      <GridDensitySelector />
      {/* <GridToolbarExport /> */}
    </GridToolbarContainer>
  );
}

const DataTable = ({ columns, rows, filterModel }) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      components={{
        Toolbar: CustomToolbar,
        Pagination: CustomPagination,
      }}
      pageSize={10}
      rowsPerPageOptions={[10, 20, 50, 100]}
      pagination
      // checkboxSelection
      filterModel={filterModel}
      disableColumnFilter
    />
  );
};

export default DataTable;
