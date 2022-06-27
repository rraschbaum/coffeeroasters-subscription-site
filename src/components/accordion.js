import styled from "styled-components";

import { QUERIES } from "../constants";
import SelectionCard from "./selectionCard";

function Accordion() {
  return (
    <Wrapper>
      <Header>
        <Button>
          <span>
            <span>How do you drink your coffee?</span>
          </span>
        </Button>
      </Header>
      <Pane>
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
      </Pane>
    </Wrapper>
  );
}

const Wrapper = styled.article``;

const Header = styled.h2`
  margin-bottom: 56px;
`;

const Button = styled.button`
  width: 100%;
`;

const Pane = styled.div`
  display: flex;
  gap: 24px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

export default Accordion;
