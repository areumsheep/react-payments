import { createContext, PropsWithChildren } from 'react';
import useToggle from 'hooks/useToggle';

export const ModalContext = createContext({
  isOpened: false,
  setToggleOpen: () => {},
  setToggleClose: () => {},
});
ModalContext.displayName = 'ModalContext';

const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpened, setToggleOpen, setToggleClose } = useToggle();

  return (
    <ModalContext.Provider value={{ isOpened, setToggleOpen, setToggleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
