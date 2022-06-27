import styled from "styled-components";

function FeaturedCoffee() {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <Content>
        <h3>Gran Espresso</h3>
        <p>
          Light and flavorful blend with cocoa and black pepper for an intense
          experience.
        </p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 193px;
  background-color: black;
`;

const Content = styled.div`
  text-align: center;
`;

export default FeaturedCoffee;
