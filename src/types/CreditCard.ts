import type { ThemeKeys } from 'styles/theme';

export interface CreditCardType {
  id: number;
  color: ThemeKeys;
  nickname: Company;
  number: string;
  holderName: string;
  expiration: string;
  cvc: string;
  password: string[];
}

export type PartialCreditCardType = Partial<CreditCardType>;
