import { useState, useMemo } from 'react';
import { Box, TextField, FormFieldControl } from 'components/@common';

import { formatNumber } from 'utils/inputFormat';
import { validatePassword } from 'utils/inputValidation';

// TODO password는 array로 되어있어 기존 handle 로직 재사용 불가 => 확장성 고민
// import useInput from 'hooks/useInput';

const CardPasswordInput = () => {
  const [password, setPassword] = useState<string[]>([]);
  const [error, setError] = useState('');

  const isInvalid = useMemo(() => {
    return error !== '';
  }, [error]);

  // TODO 4자리까지 입력 받은 후 한 번 더 확인해야 error 상태가 갱신됨
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const { id } = target.dataset;

    if (!formatNumber(value) || !id) return;
    const newPassword = [...password];
    newPassword[Number(id) - 1] = value;

    const [status, message] = validatePassword(password.join(''));

    if (status) {
      setPassword(newPassword);
    }
    setError(message);
  };

  return (
    <FormFieldControl>
      <FormFieldControl.Label>카드 비밀번호</FormFieldControl.Label>
      <Box display="flex" className="gap-x-5">
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="1"
          value={password?.[0] || ''}
          onChange={handlePassword}
          onBlur={handlePassword}
          validationStatus={isInvalid ? 'error' : 'success'}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="2"
          value={password?.[1] || ''}
          onChange={handlePassword}
          onBlur={handlePassword}
          validationStatus={isInvalid ? 'error' : 'success'}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="3"
          value={password?.[2] || ''}
          onChange={handlePassword}
          onBlur={handlePassword}
          validationStatus={isInvalid ? 'error' : 'success'}
          className="w-10 text-center"
        />
        <TextField
          type="password"
          inputMode="numeric"
          maxLength={1}
          data-id="4"
          value={password?.[3] || ''}
          onChange={handlePassword}
          onBlur={handlePassword}
          validationStatus={isInvalid ? 'error' : 'success'}
          className="w-10 text-center"
        />
      </Box>
      {isInvalid && (
        <FormFieldControl.Description isError>
          {error}
        </FormFieldControl.Description>
      )}
    </FormFieldControl>
  );
};

export default CardPasswordInput;
