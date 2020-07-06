import * as React from 'react';

interface ErrorOreSuccess {
  cardNumberErrors?: string;
  cardNameErrors?: string;
  monthError?: string;
  dayError?: string;
  cvvError?: string;
}

// handle = callBack function
function useForm<T>(handle: Function, validate: Function, formValues: T) {
  const [formData, setFormData] = React.useState<T>(formValues);

  const [formErrors, setFormErrors] = React.useState<ErrorOreSuccess>({});
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
    // if (
    //   !formErrors['cardNameErrors'] &&
    //   !formErrors['cardNumberErrors'] &&
    //   !formErrors['cvvError'] &&
    //   !formErrors['dayError'] &&
    //   !formErrors['monthError']
    // ) {
    //   setFormErrors({});
    //   handle();
    //   setFormData(formData);
    // }

    console.log(formErrors);

    if (Object.values(formErrors).length === 0 && isSubmitting) {
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
