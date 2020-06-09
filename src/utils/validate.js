export const validate = (values) => {
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
