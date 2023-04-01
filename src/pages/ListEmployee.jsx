import React from "react";
import Table from "../components/Table";

const ListEmployee = () => {
  return (
    <main className="employee-list">
      <section>
        <h1 className="h1">Employee List</h1>
        <Table />
      </section>
    </main>
  );
};

export default ListEmployee;
