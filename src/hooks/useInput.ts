import { useState, useMemo } from 'react';

const useInput = <T>(
  initialState: T,
  validator: (target: string) => any[],
  formatter?: (target: string) => string
) => {
  const [value, setValue] = useState<T>(initialState);
  const [error, setError] = useState('');

  const isInvalid = useMemo(() => {
    return error !== '';
  }, [error]);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    let formatted = value;
    if (formatter) formatted = formatter(value);
    const [status, message] = validator(value);

    if (status) {
      setValue(formatted as T);
    }
    setError(message);
  };

  return {
    value,
    error,
    isInvalid,
    handle,
  };
};

export default useInput;
