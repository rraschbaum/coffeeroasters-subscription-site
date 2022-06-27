import styled from "styled-components";

function HeroBanner({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 450px;
  background-color: black;
  color: white;
  padding: 85px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Content = styled.div``;

export default HeroBanner;
