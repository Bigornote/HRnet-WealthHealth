import React from "react";
import Table from "../components/Table";
import listImg from "../assets/list-employee.png";

/**
 * Importing the Table component
 * @returns ListEmployee component
 */

const ListEmployee = () => {
  return (
    <main className="employee-list">
      <div className="img-wrapper">
        <img
          src={listImg}
          alt="A man with a megaphone, looking at an employee file"
        />
      </div>
      <div className="content-wrapper">
        <h1 className="h1">Employee List</h1>
        <Table />
      </div>
    </main>
  );
};

export default ListEmployee;
