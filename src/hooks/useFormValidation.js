import { useState } from "react";
import { useEffect } from "react";

import { validate } from "../utils/validate";

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

  function handleBlur({ target: { name } }) {
    const validationErrors = validate(values);
    setErrors({ ...errors, [name]: validationErrors[name] });
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
