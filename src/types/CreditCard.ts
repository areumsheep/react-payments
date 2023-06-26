import type { ThemeKeys } from 'styles/theme';

export interface CreditCardType {
  id: number;
  color: ThemeKeys;
  nickname: string;
  number: string;
  holderName: string;
  expiration: string;
  cvc: string;
  password: string[];
}

export type PartialCreditCardWithId = Partial<CreditCardType> &
  Pick<CreditCardType, 'id'>;

export type PartialCreditCardWithoutId = Omit<PartialCreditCardWithId, 'id'>;
