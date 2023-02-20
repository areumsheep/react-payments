import { useState } from 'react';
import styled from '@emotion/styled';

import { CreditCard } from 'components';
import { Box, Header, TextField, FormControl } from 'components/@common';

import { formatCardNumber, formatMMYY } from 'utils/format';

const RegistrationCardPage = () => {
  const [holderName, setHolderName] = useState('');
  const [number, setNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [passwords, setPasswords] = useState<string[]>([]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setHolderName(value);
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatCardNumber(value);
    setNumber(formattedValue);
  };

  const handleExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatMMYY(value);
    setExpiration(formattedValue);
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    setCvc(sanitizedValue);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[0-9]/g;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const { name } = target;

    if (!regex.test(value) || !name) return;
    let copyPassword = [...passwords];
    copyPassword[Number(name) - 1] = value;
    setPasswords(copyPassword);
  };

  return (
    <>
      <Header showBackIcon>카드 추가</Header>
      <CreditCard
        color="brand02"
        holderName={holderName}
        number={number}
        expiration={expiration}
      />
      <Wrapper>
        <FormControl>
          <FormControl.Label>카드 번호</FormControl.Label>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              placeholder="0000-0000-0000-0000"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={19}
              value={number}
              onChange={handleNumber}
              className="w-100"
            />
          </Box>
        </FormControl>

        <FormControl>
          <FormControl.Label>만료일</FormControl.Label>
          <Box display="flex" alignItems="center">
            <TextField
              placeholder="MM / YY"
              maxLength={5}
              value={expiration}
              onChange={handleExpiration}
              className="w-30"
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box display="flex" justifyContent="space-between">
            <FormControl.Label>카드 소유자 이름 (선택)</FormControl.Label>
            <FormControl.Label>{holderName.length}/30</FormControl.Label>
          </Box>
          <TextField
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={holderName}
            onChange={handleName}
            className="w-100"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>보안 코드 (CVC/CVV)</FormControl.Label>
          <TextField
            type="password"
            inputMode="numeric"
            maxLength={3}
            placeholder="123"
            value={cvc}
            onChange={handleCVC}
            className="w-30"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>카드 비밀번호</FormControl.Label>
          <Box display="flex" className="gap-x-5" onChange={handlePassword}>
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              name="1"
              value={passwords[0] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              name="2"
              value={passwords[1] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              name="3"
              value={passwords[2] || ''}
              onChange={handlePassword}
              className="w-10 text-center"
            />
            <TextField
              type="password"
              inputMode="numeric"
              maxLength={1}
              name="4"
              value={passwords[3] || ''}
              onBlur={handlePassword}
              onChange={handlePassword}
              className="w-10 text-center"
            />
          </Box>
        </FormControl>
      </Wrapper>
    </>
  );
};

export default RegistrationCardPage;

const Wrapper = styled.div`
  margin: 30px;
`;
