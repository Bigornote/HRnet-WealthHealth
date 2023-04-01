import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  const employees = [];
  const rows = [...employees];

  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "startDate", headerName: "Start Date", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
    { field: "street", headerName: "Street", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 150 },
    { field: "zipCode", headerName: "Zip Code", width: 150 },
  ];

  return (
    <DataGrid
      getRowId={(row) => row.lastName}
      rows={rows}
      columns={columns}
      autoHeight
      hideFooterRowCount
      responsive
      pageSize={5}
      rowsPerPageOptions={[10, 25, 50, 100]}
    />
  );
};

export default Table;
