import { css } from '@emotion/react';
import './utils.css';

export const globalStyles = css`
  :root {
    --mobile-width: 375px;
  }

  body,
  h1,
  h2,
  h3,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    color: inherit;
    background-color: transparent;
  }

  textarea,
  input {
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }
`;
