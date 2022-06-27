import styled from "styled-components";
import { QUERIES } from "../constants";

function IconCard() {
  return (
    <Wrapper>
      <IconWrapper></IconWrapper>
      <Content>
        <Title>Best Quality</Title>
        <p>
          Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.
        </p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-teal);
  border-radius: 8px;
  padding-left: 48px;
  padding-top: 72px;
  padding-right: 48px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-cream);

  @media ${QUERIES.tabletOnly} {
    padding-left: 72px;
    padding-top: 40px;
    padding-right: 48px;
    padding-bottom: 40px;
    flex-direction: row;
    justify-content: center;
    gap: 56px;
  }
`;

const IconWrapper = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 100px;
  background-color: var(--color-peach);
  margin-bottom: 56px;
  flex-shrink: 0;

  @media ${QUERIES.tabletOnly} {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  text-align: center;

  @media ${QUERIES.tabletOnly} {
    text-align: left;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

export default IconCard;
