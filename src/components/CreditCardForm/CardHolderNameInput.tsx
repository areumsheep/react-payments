import { useRef, useState } from 'react';
import { Box, TextField, FormFieldControl } from 'components/@common';

const CardHolderNameInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [holderName, setHolderName] = useState('');

  const handleHolderName = () => {
    if (!inputRef.current) return;
    const { value } = inputRef.current;
    setHolderName(value);
  };

  return (
    <FormFieldControl>
      <Box display="flex" justifyContent="space-between">
        <FormFieldControl.Label>카드 소유자 이름 (선택)</FormFieldControl.Label>
        <FormFieldControl.Label>{holderName.length}/30</FormFieldControl.Label>
      </Box>
      <TextField
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        ref={inputRef}
        onChange={handleHolderName}
        className="w-100"
      />
    </FormFieldControl>
  );
};

export default CardHolderNameInput;
