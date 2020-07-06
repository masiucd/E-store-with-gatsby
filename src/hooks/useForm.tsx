import * as React from 'react';

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
    handle();
  }, []);

  return {
    handleChange,
    handleChecked,
    formErrors,
    formData,
    handleSubmit,
  };
}

export default useForm;
