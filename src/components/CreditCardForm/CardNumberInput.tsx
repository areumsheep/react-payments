import { useRef, useState } from 'react';
import { TextField, FormFieldControl } from 'components/@common';
import { formatCardNumber } from 'utils/format';

const CARD_LENGTH = 19;

const isInvalidCardLength = (number: string) => {
  return number != '' && number.length < CARD_LENGTH;
};

const CardNumberInput = () => {
  const numberRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleNumber = () => {
    if (!numberRef.current) return;
    const { value } = numberRef.current;
    const formattedValue = formatCardNumber(value);

    numberRef.current.value = formattedValue;
    setIsInvalid(isInvalidCardLength(formattedValue));
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label>카드 번호</FormFieldControl.Label>
      <TextField
        placeholder="0000-0000-0000-0000"
        type="text"
        inputMode="numeric"
        maxLength={19}
        ref={numberRef}
        onChange={handleNumber}
        validationStatus={isInvalid ? 'error' : 'success'}
        className="w-100"
      />
      {isInvalid && (
        <FormFieldControl.Description isError={isInvalid}>
          카드 번호는 16자 모두 입력되어야 합니다.
        </FormFieldControl.Description>
      )}
    </FormFieldControl>
  );
};

export default CardNumberInput;
