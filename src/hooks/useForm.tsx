import * as React from 'react';

interface Error {
  cardNumberErrors?: string;
  cardNameErrors?: string;
  monthError?: string;
  dayError?: string;
  cvvError?: string;
}

// handle = callBack function
function useForm<T, E>(handle: Function, validate: Function, formValues: T) {
  const [formData, setFormData] = React.useState<T>(formValues);

  const [formErrors, setFormErrors] = React.useState<Error>({});
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData, [name]: value ? value : e.target.checked });
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      handle();
      setFormData(formData);
    }
  }, [formErrors]);

  return {
    handleChange,
    handleChecked,
    formErrors,
    formData,
    handleSubmit,
  };
}

export default useForm;
