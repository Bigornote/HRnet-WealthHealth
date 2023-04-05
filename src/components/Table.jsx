import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const Table = () => {
  const employee = useSelector((state) => state.employee.employees);

  const [row, setRow] = useState(employee);

  useEffect(() => {
    setRow(employee);
  }, [employee]);

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "dateOfBirth", headerName: "Date of Birth", flex: 1 },
    { field: "street", headerName: "Street", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "state", headerName: "State", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <DataGrid
      rows={row}
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
