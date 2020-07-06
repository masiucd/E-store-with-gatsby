import * as React from 'react';
import { Select, Form, Label, Input, ErrorMsg } from '../styled/Form';
import { BtnPrimary } from '../styled/Buttons';
import useForm from '../../hooks/useForm';
import { formData as formDataForCard } from '../../utils/data';
import validateCard from '../../utils/validateCard';
import { useCartDispatch } from '../../context/cart/CartProvider';

export interface ICheckoutForm {
  onLabelForCardNumber?: string;
  onLabelForMonth?: string;
  onLabelForDay?: string;
  onLabelForName?: string;
  onLabelForCvv?: string;
  onLabelSaveCard?: string;
}

export default function CheckoutForm(props: ICheckoutForm) {
  // TODO: Perhaps for deleting!
  const [formData, setFormData] = React.useState(formDataForCard);

  const dispatch = useCartDispatch();
  const handleSubmit = () => {
    dispatch({
      type: 'OPEN_CONFIRM_CARD',
    });
    setFormData({
      name: '',
      cardNumber: '',
      month: '',
      day: '',
      cvv: '',
      isSave: false,
    });
  };

  const {
    handleChange,
    handleSubmit: submit,
    handleChecked,
    formErrors,
    formData: data,
  } = useForm(handleSubmit, validateCard, formData);

  const {
    onLabelForCardNumber,
    onLabelForMonth,
    onLabelForDay,
    onLabelForCvv,
    onLabelForName,
    onLabelSaveCard,
  } = props;

  const options = {
    labelForCardNumber: onLabelForCardNumber || 'card Number',
    labelForMonth: onLabelForMonth || 'Month',
    labelForDay: onLabelForDay || 'Day',
    labelForName: onLabelForName || 'Full name',
    labelForCvv: onLabelForCvv || 'CSV',
    labelForSaveCard: onLabelSaveCard || 'save card?',
  };

  const makeArrWithNums = (amount: number) => {
    return Array.from(Array(amount).keys()).filter(x => x >= 1);
  };

  return (
    <Form onSubmit={submit}>
      <Label formErrors={formErrors}>
        <span>{options.labelForCardNumber}</span>
        <Input
          type="text"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
        />
        {formErrors && formErrors.cardNumberErrors && (
          <ErrorMsg>{formErrors.cardNumberErrors}</ErrorMsg>
        )}
      </Label>
      <Label formErrors={formErrors}>
        <div className="label-row">
          <span>{options.labelForMonth}</span>
          <span>{options.labelForDay}</span>
        </div>
        <div className="select">
          <Select name="month" value={data.month} onChange={handleChange}>
            <option disabled>Month</option>
            {makeArrWithNums(13).map(x => (
              <option value={x} key={x}>
                {x.toString().length === 1 ? '0' + x : x}
              </option>
            ))}
          </Select>
          <Select name="day" value={data.day} onChange={handleChange}>
            <option disabled>Day</option>
            {makeArrWithNums(32).map(x => (
              <option value={x} key={x}>
                {x.toString().length === 1 ? '0' + x : x}
              </option>
            ))}
          </Select>
        </div>
      </Label>
      <Label formErrors={formErrors}>
        <span>{options.labelForName}</span>
        <Input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        {formErrors && formErrors.cardNameErrors && (
          <ErrorMsg>{formErrors.cardNameErrors}</ErrorMsg>
        )}
      </Label>
      <Label formErrors={formErrors}>
        <span>{options.labelForCvv}</span>
        <Input
          type="text"
          name="cvv"
          value={data.cvv}
          onChange={handleChange}
        />
        {formErrors && formErrors.cvvError && (
          <ErrorMsg>{formErrors.cvvError}</ErrorMsg>
        )}
      </Label>
      <Label formErrors={formErrors}>
        <span>{options.labelForSaveCard}</span>
        <Input
          type="checkbox"
          name="isSave"
          checked={data.isSave}
          onChange={handleChecked}
        />
      </Label>
      <BtnPrimary as="button" type="submit">
        Pay
      </BtnPrimary>
    </Form>
  );
}
