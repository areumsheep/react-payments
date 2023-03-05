import { useMemo } from 'react';
import styled from '@emotion/styled';

import { Box, Header, Button, Chip, Modal } from 'components/@common';
import { CreditCard, SelectCompany } from 'components';
import {
  CardNumberInput,
  CardExpirationInput,
  CardHolderNameInput,
  CardCVCInput,
  CardPasswordInput,
} from 'components/CreditCardForm';

import useCardData from 'hooks/useCardData';
import useRouter from 'routes/useRouter';

import { isObjectComplete } from 'utils/validation';
import { setLocalStorageItem } from 'utils/localStorage';

import type { CreditCardType } from 'types/CreditCard';

const CARD_LENGTH = 19;

const RegistrationCardPage = () => {
  const { push } = useRouter();
  const { card, changeCardInfo } = useCardData();

  const isInvalidCardLength = () => {
    return card.number != '' && card.number.length < CARD_LENGTH;
  };

  const isSubmitEnabled = useMemo(() => {
    return isObjectComplete<CreditCardType>(card) && !isInvalidCardLength();
  }, [{ ...card }]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalStorageItem('CardValues', card);
    push('/card-name-input');
  };

  return (
    <>
      <Header showBackIcon>카드 추가</Header>
      <CreditCard
        color={card.color}
        holderName={card?.holderName}
        number={card?.number}
        expiration={card?.expiration}
      />
      <ChipWrapper display="flex" justifyContent="center">
        <Modal>
          <Modal.Trigger>
            <Chip>카드사 선택</Chip>
          </Modal.Trigger>

          <Modal.Content>
            <SelectCompany onClick={changeCardInfo} />
          </Modal.Content>
        </Modal>
      </ChipWrapper>

      <Form onSubmit={onSubmit}>
        <CardNumberInput />

        <CardExpirationInput />

        <CardHolderNameInput />

        <CardCVCInput />

        <CardPasswordInput />

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" color="brand02" disabled={!isSubmitEnabled}>
            다음 단계로
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default RegistrationCardPage;

const Form = styled.form`
  margin: 10px 30px;
`;
const ChipWrapper = styled(Box)`
  margin: 10px 0;
`;
