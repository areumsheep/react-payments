import { useRef } from 'react';
import { Box, TextField, FormFieldControl } from 'components/@common';

const CardPasswordInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[0-9]/g;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const { id } = target.dataset;

    if (!regex.test(value) || !id) return;
    // const newPassword = [...card.password];
    // newPassword[Number(id) - 1] = value;
    // changeCardInfo({ password: [...newPassword] });
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label>카드 비밀번호</FormFieldControl.Label>
      <Box display="flex" className="gap-x-5" onChange={handlePassword}>
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="1"
          // value={card?.password?.[0] || ''}
          onChange={handlePassword}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="2"
          // value={card?.password?.[1] || ''}
          onChange={handlePassword}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="3"
          // value={card?.password?.[2] || ''}
          onChange={handlePassword}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="4"
          // value={card?.password?.[3] || ''}
          onChange={handlePassword}
          className="w-10 text-center"
        />
      </Box>
    </FormFieldControl>
  );
};

export default CardPasswordInput;
