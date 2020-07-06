// Validate function for validateCard our formValues

interface ValidateMessage {
  cardNumberErrors?: string;

  cardNameErrors?: string;

  monthError?: string;

  dayError?: string;

  cvvError?: string;
}

interface FormData {
  cardNumber: string;
  month: string;
  day: string;
  name: string;
  cvv: string;
  isSave: boolean;
}

function validateCard(values: FormData) {
  const errors: ValidateMessage = {};
  let regex = /^4\d{3}([\ \-]?)\d{4}\1\d{4}\1\d{4}$/;

  if (!values['cardNumber']) {
    errors.cardNumberErrors = `Card numbers is required`;
  } else if (!regex.test(values['cardNumber'])) {
    errors.cardNumberErrors = 'wrong credit card format';
  }

  if (!values['name']) {
    errors.cardNameErrors = ` Please fill in your name`;
  } else if (values['name'].length < 2) {
    errors.cardNameErrors = ` Please fill the name, longer then 2 chars`;
  }

  if (!values['day']) {
    errors.dayError = ` Please fill in a day`;
  }
  if (!values['month']) {
    errors.monthError = ` Please fill in a month`;
  }
  if (!values['cvv']) {
    errors.cvvError = ` Please fill in a cvv`;
  } else if (values['cvv'].length < 3 || values['cvv'].length > 3) {
    errors.cvvError = ` Please fill in a cvv with exec 3 numbers`;
  }

  return errors;
}

export default validateCard;
