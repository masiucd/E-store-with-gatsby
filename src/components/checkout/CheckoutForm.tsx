import * as React from 'react';
import { Select, Form, Label, Input } from '../styled/Form';
import { BtnPrimary } from '../styled/Buttons';

export interface ICheckoutForm {
  onLabelForCardNumber?: string;
  onLabelForDate?: string;
  onLabelForName?: string;
  onLabelForCvv?: string;
  onLabelSaveCard?: boolean;
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
    labelForCvv: onLabelForCvv || 'Last Date',
    labelForSaveCard: onLabelSaveCard || false,
  };

  // const monthes2 = [...Array(12).keys()];
  // [...Array(10).keys()]
  const monthes = Array.from(Array(13).keys());

  console.log(monthes);

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
            <option value="">!</option>
            {monthes.map(x => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </Select>
          <Select>
            <option value="">!</option>
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
        <Input type="checkbox" />
      </Label>
      <BtnPrimary as="button" type="submit">
        Pay
      </BtnPrimary>
    </Form>
  );
}
