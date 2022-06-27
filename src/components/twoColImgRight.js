import styled from "styled-components";

import { QUERIES } from "../constants";

function TwoColImgRight() {
  return (
    <Wrapper>
      <Content>
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </Content>
      <ImgWrapper></ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 125px;
  height: 474px;
  background-color: gray;
  border-radius: 10px;
  padding: 85px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 474px;
  background: black;
  border-radius: 8px;
  margin-top: calc(-88px + -85px);
`;

const Content = styled.div`
  color: white;
`;

export default TwoColImgRight;
