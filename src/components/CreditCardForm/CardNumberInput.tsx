import { useMemo, useRef, useState } from 'react';
import { TextField, FormFieldControl } from 'components/@common';
import { formatCardNumber } from 'utils/format';
import { validateCardNumber } from 'utils/inputValidation';

const CardNumberInput = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isInvalid = useMemo(() => {
    return errorMessage !== '';
  }, [errorMessage]);

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formatted = formatCardNumber(value);
    const [status, message] = validateCardNumber(value);

    if (status) {
      setCardNumber(formatted);
    }
    setErrorMessage(message);
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label>카드 번호</FormFieldControl.Label>
      <TextField
        placeholder="0000-0000-0000-0000"
        type="text"
        inputMode="numeric"
        value={cardNumber}
        onChange={handleNumber}
        validationStatus={isInvalid ? 'error' : 'success'}
        className="w-100"
      />
      {isInvalid && (
        <FormFieldControl.Description isError>
          {errorMessage}
        </FormFieldControl.Description>
      )}
    </FormFieldControl>
  );
};

export default CardNumberInput;
