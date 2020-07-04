import * as React from 'react';
import { Select, Form, Label, Input } from '../styled/Form';
import { BtnPrimary } from '../styled/Buttons';

export interface ICheckoutForm {
  onLabelForCardNumber?: string;
  onLabelForDate?: string;
  onLabelForName?: string;
  onLabelForCvv?: string;
  onLabelSaveCard?: string;
}

export default function CheckoutForm(props: ICheckoutForm) {
  const {
    onLabelForCardNumber,
    onLabelForDate,
    onLabelForCvv,
    onLabelForName,
    onLabelSaveCard,
  } = props;

  const options = {
    labelForCardNumber: onLabelForCardNumber || 'card Number',
    labelForDate: onLabelForDate || 'Last Date',
    labelForName: onLabelForName || 'Full name',
    labelForCvv: onLabelForCvv || 'CSV',
    labelForSaveCard: onLabelSaveCard || 'save card?',
  };

  const makeArrWithNums = (amount: number) => {
    return Array.from(Array(amount).keys()).filter(x => x >= 1);
  };

  return (
    <Form>
      <Label>
        <span>{options.labelForCardNumber}</span>
        <Input type="text" />
      </Label>
      <Label>
        <span>{options.labelForDate}</span>
        <div className="select">
          <Select>
            <option disabled>Month</option>
            {makeArrWithNums(13).map(x => (
              <option value={x} key={x}>
                {x.toString().length === 1 ? '0' + x : x}
              </option>
            ))}
          </Select>
          <Select>
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
        <Input type="text" />
      </Label>
      <Label>
        <span>{options.labelForCvv}</span>
        <Input type="text" />
      </Label>
      <Label>
        <span>{options.labelForSaveCard}</span>
        <Input type="checkbox" isCheckbox />
      </Label>
      <BtnPrimary as="button" type="submit">
        Pay
      </BtnPrimary>
    </Form>
  );
}
