export interface CreditCardType {
  number: string;
  holderName: string;
  expiration: string;
  cvc: string;
  password: string[];
}

export type PartialCreditCardWithId = Partial<CreditCardType> &
  Pick<CreditCardType, 'id'>;

export type PartialCreditCardWithoutId = Omit<PartialCreditCardWithId, 'id'>;
