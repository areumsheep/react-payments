import { pipe, map, every, type Predicate } from './fp-ts';

const validate = (validator: Function[], errorMessage: string) => {
  return (target: string) => {
    const checker = pipe(
      map((fn) => fn(target)),
      every(Boolean)
    )(validator);
    return [checker, checker ? errorMessage : ''];
  };
};

// Input Validation Util
const maxLength =
  (limit: number): Predicate<string> =>
  (text: string) =>
    text.length <= limit;

// Input Validation With Domain
export const validateCardNumber = (target: string) => {
  const MAX_CARD_NUMBER_WITH_DELIMITER = 19;
  return validate(
    [maxLength(MAX_CARD_NUMBER_WITH_DELIMITER)],
    '카드 번호는 16자 모두 입력되어야 합니다.'
  )(target);
};

export const validateExpiration = (target: string) => {
  const MAX_EXPIRATION_WITH_DELIMITER = 5;
  return validate(
    [maxLength(MAX_EXPIRATION_WITH_DELIMITER)],
    '만료 일자는 MM/YY 형태로 4자 모두 입력되어야 합니다.'
  )(target);
};
