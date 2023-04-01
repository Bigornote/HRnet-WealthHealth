import React from "react";
import formImg from "../assets/form.png";
import Form from "../components/Form";

const CreateEmployee = () => {
  return (
    <main className="create">
      <div className="img-wrapper">
        <img src={formImg} alt="a valid form drawing" />
      </div>
      <div className="form-wrapper">
        <h1 className="h2">Create a new employee</h1>
        <Form />
      </div>
    </main>
  );
};

export default CreateEmployee;
