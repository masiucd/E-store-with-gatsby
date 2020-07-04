import * as React from 'react';

interface FormData {
  cardNumber: string;
  month: string;
  day: string;
  fullName: string;
  cvv: string;
  saveCard: boolean;
}

interface Error {}

// handle = callBack function
function useForm<T, E>(handle: Function, validate: Function, formValues: T) {
  const [formData, setFormData] = React.useState<T>(formValues);

  const [formErrors, setFormErrors] = React.useState<E | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  React.useEffect(() => {});

  return {
    handleChange,
    formErrors,
  };
}

export default useForm;
