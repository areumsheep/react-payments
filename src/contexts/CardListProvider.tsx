import { createContext, PropsWithChildren, useRef, useState } from 'react';
import type {
  PartialCreditCardWithId,
  PartialCreditCardWithoutId,
} from 'types/CreditCard';

export const CardListContext = createContext({
  cardList: [] as PartialCreditCardWithId[],
  addCardInfo: (data: PartialCreditCardWithoutId) => {},
  removeCardInfo: (selectId: number) => {},
  updateCardNickname: (selectId: number, value: string) => {},
});
CardListContext.displayName = 'CardListContext';

const CardListProvider = ({ children }: PropsWithChildren) => {
  const id = useRef(1);
  const [cardList, setCardList] = useState<PartialCreditCardWithId[]>([]);

  const addCardInfo = (data: PartialCreditCardWithoutId) => {
    const result: PartialCreditCardWithId = { ...data, id: id.current };
    setCardList((prev) => [...prev, result]);
    id.current += 1;
  };

  const removeCardInfo = (selectId: number) => {
    const filtered = [...cardList].filter(({ id }) => id !== selectId);
    setCardList(filtered);
  };

  const updateCardNickname = (selectId: number, value: string) => {
    const copy = [...cardList];
    copy[selectId - 1].nickname = value;
    setCardList(copy);
  };

  return (
    <CardListContext.Provider
      value={{ cardList, addCardInfo, removeCardInfo, updateCardNickname }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
