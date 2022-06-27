import styled from "styled-components";

import { WEIGHTS } from "../constants";

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  padding: 16px 32px;
  font-family: "Fraunces", serif;
  font-weight: ${WEIGHTS.black};
  font-size: 1.125rem;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: var(--color-teal);
  color: var(--color-cream);

  &:hover {
    background-color: var(--color-aqua);
  }
`;

export default Button;
