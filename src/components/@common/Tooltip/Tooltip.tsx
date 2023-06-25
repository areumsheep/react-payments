import { useId } from 'react';

import useToggle from 'hooks/useToggle';

import TooltipPortal from './TooltipPortal';
import type { TooltipProps } from './Tooltip.types';
import * as Styled from './Tooltip.styled';

const Tooltip = ({ children, content }: TooltipProps) => {
  const id = useId();
  const { isOpened, setToggleOpen, setToggleClose } = useToggle();

  return (
    <Styled.Tooltip
      id={id}
      onMouseOver={setToggleOpen}
      onMouseLeave={setToggleClose}
    >
      {children}

      {isOpened && (
        <TooltipPortal id={id}>
          <Styled.Content>{content}</Styled.Content>
        </TooltipPortal>
      )}
    </Styled.Tooltip>
  );
};

export default Tooltip;
