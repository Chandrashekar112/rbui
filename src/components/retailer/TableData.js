import React, { useState, useEffect, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Mastercontext } from "../useContext/MasterContext";

const TableData = ({ rows, filterModel, modifyColums, dt }) => {
  const { masterData, setMasterData } = useContext(Mastercontext);
  const columns = [
    {
      field: "",
      header: "",
      sortable: false,
      headerStyle: { width: "80px" },
    },
    {
      field: "company_id",
      header: "Company Id",
      sortable: true,
      headerStyle: { width: "100px" },
    },
    {
      field: "retailer_name",
      header: "Retailer Name",
      sortable: true,
      headerStyle: { width: "180px" },
    },
    {
      field: "retailer_state",
      header: "Retailer State",
      sortable: true,
      headerStyle: { width: "150px" },
    },

    {
      field: "shipping_cost_ground",
      header: "Shipping Cost Ground ",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_cost_2day",
      header: "Shipping Cost 2 day",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_cost_overnight",
      header: "Shipping Cost Overnight",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "rb_percent_sales",
      header: "RB Percent Sales",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "retailer_percent_sales",
      header: "Retailer  Percent Sales",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "credit_card_fee_percent",
      header: "credit card Fee percent",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_fedex",
      header: "shipping Fedex",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "shipping_non_fedex",
      header: "Shipping non Fedex",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "retailer_contrib_free_ship",
      header: "Retailer Contrib Free Ship",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "dw_contrib_free_ship",
      header: "Dw Contrib Free Ship",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "include_tax",
      header: "Include Tax",
      sortable: true,
      headerStyle: { width: "150px" },
    },
    {
      field: "include_ccfee",
      header: "Include ccfee",
      sortable: true,
      headerStyle: { width: "150px" },
    },
  ];

  const [filters, setFilters] = useState({});

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        sortable={col.sortable}
        headerStyle={col.headerStyle}
        body={(rows, col) => modifyColums(rows, col)}
      />
    );
  });
  return (
    <div>
      <div
        className="card"
        style={{ width: "100%", border: "1px solid #e9ecef" }}
      >
        <DataTable
          ref={dt}
          filters={filterModel}
          onFilter={(e) => setFilters(e.filters)}
          emptyMessage="No customers found."
          value={rows}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          resizableColumns
          columnResizeMode="expand"
          showGridlines
          className="p-datatable-sm"
          scrollable
          scrollHeight="515px"
          style={{
            width: masterData && !masterData.setOpen ? "1437px" : "1190px",
          }}
        >
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  );
};

export default TableData;
