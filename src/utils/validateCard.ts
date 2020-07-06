// Validate function for validateCard our formValues

interface Error {
  cardNumber: string;
  month: string;
  day: string;
  name: string;
  cvv: string;
  isSave: boolean;
}

function validateCard<T, K extends keyof T, E>(values: T, valuesKey: K) {
  const errors: E = {};
  if (!values[valuesKey]) {
    errors.errorsMsg = `${values[valuesKey]} is required!`;
  }
}

export default validateCard;
