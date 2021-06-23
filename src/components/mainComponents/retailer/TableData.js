import React, { useState, useEffect, useRef, useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Mastercontext } from "../../useContext/MasterContext";

const TableData = ({ columns, rows, filterModel, modifyColums }) => {
  const { masterData, setMasterData } = useContext(Mastercontext);

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

  console.log(masterData);
  return (
    <div>
      <div
        className="card"
        style={{ width: "100%", border: "1px solid #e9ecef" }}
      >
        <DataTable
          filters={filterModel}
          onFilter={(e) => setFilters(e.filters)}
          emptyMessage="No customers found."
          value={rows}
          paginator
          rows={10}
          // rowsPerPageOptions={[10, 20, 50]}
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
