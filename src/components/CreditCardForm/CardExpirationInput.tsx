import { useRef } from 'react';
import { TextField, FormFieldControl } from 'components/@common';
import { formatMMYY } from 'utils/format';

const CardExpirationInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpiration = () => {
    if (!inputRef.current) return;
    const { value } = inputRef.current;
    const formattedValue = formatMMYY(value);
    inputRef.current.value = formattedValue;
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label>만료일</FormFieldControl.Label>
      <TextField
        placeholder="MM / YY"
        maxLength={5}
        ref={inputRef}
        onChange={handleExpiration}
        className="w-30"
      />
    </FormFieldControl>
  );
};

export default CardExpirationInput;
