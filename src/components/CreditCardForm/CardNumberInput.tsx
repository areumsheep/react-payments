import { TextField, FormFieldControl } from 'components/@common';
import { formatCardNumber } from 'utils/inputFormat';
import { validateCardNumber } from 'utils/inputValidation';

import useInput from 'hooks/useInput';

const CardNumberInput = () => {
  const { value, error, isInvalid, handle } = useInput(
    '',
    validateCardNumber,
    formatCardNumber
  );

  return (
    <FormFieldControl>
      <FormFieldControl.Label>카드 번호</FormFieldControl.Label>
      <TextField
        placeholder="0000-0000-0000-0000"
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handle}
        validationStatus={isInvalid ? 'error' : 'success'}
        className="w-100"
      />
      {isInvalid && (
        <FormFieldControl.Description isError>
          {error}
        </FormFieldControl.Description>
      )}
    </FormFieldControl>
  );
};

export default CardNumberInput;
