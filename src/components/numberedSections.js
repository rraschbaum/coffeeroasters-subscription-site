import styled from "styled-components";
import Button from "./button";

import { QUERIES } from "../constants";
import NumberedSection from "./numberedSection";

function NumberedSections() {
  return (
    <Wrapper>
      <h2>How it works</h2>
      <NumberedSectionsWrapper>
        <NumberedSection />
        <NumberedSection />
        <NumberedSection />
      </NumberedSectionsWrapper>
      <Button>Create your plan</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 88px;
  padding-right: 88px;
`;

const NumberedSectionsWrapper = styled.div`
  display: flex;
  gap: 96px;
  margin-bottom: 64px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

export default NumberedSections;
