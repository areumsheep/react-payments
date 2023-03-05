import { useRef } from 'react';
import { TextField, FormFieldControl } from 'components/@common';

import { ReactComponent as CVCIcon } from 'assets/CVCIcon.svg';

import { formatNumber } from 'utils/inputFormat';
import { validateCVC } from 'utils/inputValidation';

import useInput from 'hooks/useInput';

const CardCVCInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value, error, isInvalid, handle } = useInput(
    '',
    validateCVC,
    formatNumber
  );

  const handleCVC = () => {
    if (!inputRef.current) return;
    const { value } = inputRef.current;
    const formattedValue = value.replace(/[^0-9]/g, '');
    inputRef.current.value = formattedValue;
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label
        help={
          <>
            <p>카드 뒷면의 서명란 카드번호 중</p>
            <p>맨 뒤 3자리 숫자를 입력해주세요.</p>
            <CVCIcon />
          </>
        }
      >
        보안 코드 (CVC/CVV)
      </FormFieldControl.Label>
      <TextField
        type="password"
        inputMode="numeric"
        placeholder="123"
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

export default CardCVCInput;
