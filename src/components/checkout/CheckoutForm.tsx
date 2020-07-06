import * as React from 'react';
import { Select, Form, Label, Input, ErrorMsg } from '../styled/Form';
import { BtnPrimary } from '../styled/Buttons';
import useForm from '../../hooks/useForm';
import { formData as formDataForCard } from '../../utils/data';
import validateCard from '../../utils/validateCard';

export interface ICheckoutForm {
  onLabelForCardNumber?: string;
  onLabelForMonth?: string;
  onLabelForDay?: string;
  onLabelForName?: string;
  onLabelForCvv?: string;
  onLabelSaveCard?: string;
}

interface FormData {
  cardNumber: string;
  month: string;
  day: string;
  name: string;
  cvv: string;
  isSave: boolean;
}

export default function CheckoutForm(props: ICheckoutForm) {
  const handleSubmit = () => {
    console.log('is submitting');
  };

  const {
    handleChange,
    handleSubmit: submit,
    handleChecked,
    formErrors,
    formData: data,
  } = useForm(handleSubmit, validateCard, formDataForCard);

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
        <span
          style={{
            color:
              formErrors &&
              formErrors.cardNumberErrors &&
              'rgba(229, 57, 53, 1)',
          }}
        >
          {options.labelForCardNumber}
        </span>
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
      <Label>
        <div
          className="label-row"
          style={{
            flexDirection:
              formErrors.dayError || formErrors.monthError ? 'column' : 'row',
          }}
        >
          <span>{options.labelForMonth}</span>
          <span>{options.labelForDay}</span>

          {formErrors && formErrors.monthError && (
            <ErrorMsg>{formErrors.monthError}</ErrorMsg>
          )}
          {formErrors && formErrors.dayError && (
            <ErrorMsg>{formErrors.dayError}</ErrorMsg>
          )}
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
      <Label>
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
      <Label>
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
      <Label>
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
