import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import formSchema from "../schema/formSchema";
import { createEmployee } from "../feature/employee.slice";
import { states } from "../services/states";
import { departments } from "../services/departments";

const Form = () => {
  const dispatch = useDispatch();
  // Lorsque que le composant modal sera importé
  // const [displayModal, setDisplayModal] = useState(false);

  // React Hook Form config
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  // Fonction HandleSubmit()
  const SubmitForm = (data) => {
    dispatch(createEmployee(data));
    console.log(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(SubmitForm)}>
      {/* FIRSTNAME */}
      <div className="wrapper">
        <label>
          First Name :
          <input type="text" {...register("firstName")} />
        </label>
        {errors.firstName && (
          <p className="text-error">{errors.firstName.message}</p>
        )}
      </div>
      {/* LASTNAME */}
      <div className="wrapper">
        <label>
          Last Name :
          <input type="text" {...register("lastName")} />
        </label>
        {errors.lastName && (
          <p className="text-error">{errors.lastName.message}</p>
        )}
      </div>
      {/* DATE OF BIRTH */}
      <div className="wrapper">
        <label>
          Date of Birth :
          <input type="date" {...register("dateOfBirth")} />
        </label>
        {errors.dateOfBirth && (
          <p className="text-error">{errors.dateOfBirth.message}</p>
        )}
      </div>
      <div className="wrapper">
        <label>
          Start Date :
          <input type="date" {...register("startDate")} />
        </label>
        {errors.startDate && (
          <p className="text-error">{errors.startDate.message}</p>
        )}
      </div>
      <fieldset>
        <legend>Adress</legend>
        <div className="wrapper-adress">
          <div>
            <label>
              Street :
              <input type="text" {...register("street")} />
            </label>
            {errors.street && (
              <p className="text-error">{errors.street.message}</p>
            )}
          </div>
          <div>
            <label>
              City:
              <input type="text" {...register("city")} />
            </label>
            {errors.city && <p className="text-error">{errors.city.message}</p>}
          </div>
        </div>
        <div className="wrapper-adress">
          <div>
            <label>
              Zip Code :
              <input type="text" {...register("zipCode")} />
            </label>
            {errors.zipCode && (
              <p className="text-error">{errors.zipCode.message}</p>
            )}
          </div>
          <div>
            <label>
              State :
              <Controller
                control={control}
                name="state"
                render={({ field }) => (
                  <>
                    <select {...field}>
                      <option value="default">-- Select a States --</option>
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-error">{errors.state.message}</p>
                    )}
                  </>
                )}
              />
            </label>
          </div>
        </div>
      </fieldset>
      <div className="wrapper">
        <label>
          Departments
          <Controller
            control={control}
            name="department"
            render={({ field }) => (
              <>
                <select {...field}>
                  <option value="default">-- Select a Departments --</option>
                  {departments.map((department, index) => (
                    <option key={index} value={department.name}>
                      {department.name}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p className="text-error">{errors.department.message}</p>
                )}
              </>
            )}
          />
        </label>
      </div>
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
