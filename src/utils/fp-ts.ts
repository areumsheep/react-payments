export const pipe = (...logics: Function[]) => {
  return (target: any) => logics.reduce((value, logic) => logic(value), target);
};

export type Predicate<T> = (value: T) => boolean;

export const curry = (value: string) => {
  return (...logics: Function[]) =>
    logics.reduce((prev, logic) => {
      prev.push(logic(value) as never);
      return prev;
    }, []);
};

export const map = <T = Function>(
  callback: (value: T, index: number, array: T[]) => {}
) => {
  return (array: T[]) =>
    array.map((value, index) => callback(value, index, array));
};

export const every = <T>(
  callback: (value: T, index: number, array: T[]) => Boolean
) => {
  return (array: any[]) =>
    array.every((value, index) => callback(value, index, array));
};
