import styled from "styled-components";

import { QUERIES } from "../constants";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1480px;
  min-width: 0;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr auto;
  padding-left: 80px;
  padding-top: 48px;
  padding-right: 80px;
  padding-bottom: 88px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 72px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 24px;
    padding-top: 32px;
    padding-right: 24px;
    padding-bottom: 72px;
  }
`;

const Main = styled.main``;

export default Layout;
