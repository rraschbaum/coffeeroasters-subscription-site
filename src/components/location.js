import styled from "styled-components";

function Location() {
  return (
    <Wrapper>
      <ImgWrapper></ImgWrapper>
      <Content>
        <h3>United Kingom</h3>
        <p>68 Asfordby Rd</p>
        <p>Alcaston</p>
        <p>SY6 1YA</p>
        <p>+44 1241 918425</p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ImgWrapper = styled.div``;
const Content = styled.div``;

export default Location;
