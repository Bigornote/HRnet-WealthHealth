import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "First name is incorrect, please use valid characters only!"
    )
    .min(2, "First Name must be at least 2 characters long.")
    .required("First Name is required."),
  lastName: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "Last name is incorrect, please use valid characters only!"
    )
    .min(2, "Last Name must be at least 2 characters long.")
    .required("Last Name is required."),
  dateOfBirth: yup.string().required("Date Of Birth is required"),
  startDate: yup.string().required("start Date is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  zipCode: yup
    .number()
    .typeError("Zip code must be a number")
    .positive("Zip code must be a positive number")
    .integer("Zip code must be an integer")
    .test("required", "Zip code is required", function (value) {
      return (
        value !== undefined && value !== null && value.toString().trim() !== ""
      );
    })
    .test("isNumber", "Zip code must be a number", function (value) {
      return !value || (typeof value === "number" && !isNaN(value));
    }),
  state: yup.string().required("State is required"),
  department: yup.string().required("Department is required"),
});

export default formSchema;
