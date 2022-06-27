import styled from "styled-components";

import { QUERIES } from "../constants";
import IconCard from "./iconCard";

function ContentWithIconCards() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Title>Why choose us?</Title>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </Content>
      </ContentWrapper>
      <IconCards>
        <IconCard />
        <IconCard />
        <IconCard />
      </IconCards>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  height: 580px;
  background-color: var(--color-gray-400);
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  max-width: 540px;
  margin-top: 100px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 32px;
`;

const IconCards = styled.div`
  padding-left: 88px;
  padding-right: 88px;
  display: flex;
  gap: 32px;
  margin-top: -230px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export default ContentWithIconCards;
