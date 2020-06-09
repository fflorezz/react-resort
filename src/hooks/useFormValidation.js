import { useState } from "react";
import { useEffect } from "react";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "es necesario ingresar un email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "email invalido";
  }

  if (!values.name) {
    errors.name = "es necesario ingresar tu nombre";
  }

  if (values.startDate === values.endDate) {
    errors.endDate = "elige una fecha diferente al checkin";
  }
  return errors;
};

export const useFormvalidation = (initialState, uploadReservation) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        const resetInputs = () => {
          setValues(initialState);
        };
        uploadReservation(resetInputs);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  function handleChange({ target: { name, value } }) {
    if (name === "startDate") {
      setValues({ ...values, startDate: value, endDate: value });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
  };
};
