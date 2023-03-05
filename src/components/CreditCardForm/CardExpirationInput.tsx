import { TextField, FormFieldControl } from 'components/@common';
import { formatMMYY } from 'utils/inputFormat';
import { validateExpiration } from 'utils/inputValidation';

import useInput from 'hooks/useInput';

const CardExpirationInput = () => {
  const { value, error, isInvalid, handle } = useInput(
    '',
    validateExpiration,
    formatMMYY
  );

  return (
    <FormFieldControl>
      <FormFieldControl.Label>만료일</FormFieldControl.Label>
      <TextField
        placeholder="MM / YY"
        value={value}
        onChange={handle}
        validationStatus={isInvalid ? 'error' : 'success'}
        className="w-30"
      />
      {isInvalid && (
        <FormFieldControl.Description isError>
          {error}
        </FormFieldControl.Description>
      )}
    </FormFieldControl>
  );
};

export default CardExpirationInput;
