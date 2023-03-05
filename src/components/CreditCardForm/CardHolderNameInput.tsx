import { useRef, useState } from 'react';
import { Box, TextField, FormFieldControl } from 'components/@common';

const CardHolderNameInput = () => {
  const [holderName, setHolderName] = useState('');

  const handleHolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
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
        onChange={handleHolderName}
        className="w-100"
      />
    </FormFieldControl>
  );
};

export default CardHolderNameInput;
