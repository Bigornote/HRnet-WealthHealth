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
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  zipCode: yup.number().required("Zip code is required"),
  state: yup.string().required("State is required"),
  department: yup.string().required("Department is required"),
});

export default formSchema;
