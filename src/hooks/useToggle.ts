import { useState } from 'react';

const useToggle = () => {
  const [isOpened, setIsOpened] = useState(false);

  const setToggleOpen = () => {
    setIsOpened(true);
  };
  const setToggleClose = () => {
    setIsOpened(false);
  };

  return {
    isOpened,
    //
    setToggleOpen,
    setToggleClose,
  };
};

export default useToggle;
