import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { TextFieldProps } from './TextField.types';

export const TextField = styled.input<TextFieldProps>`
  height: 45px;
  padding: 10px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.gray01};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray05};
  }

  ${({ theme, validationStatus }) =>
    validationStatus === 'error' &&
    css`
      background-color: ${theme.color.red00};
      outline: 1px solid ${theme.color.red06};
    `}
`;
