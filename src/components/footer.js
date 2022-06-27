import Link from "next/link";
import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../constants";

function Footer() {
  return (
    <Wrapper>
      <NavContent>
        {/* fix these divs after svg logo is added in */}
        <LogoWrapper>
          <Link href="/">
            <a>Coffeeroasters</a>
          </Link>
        </LogoWrapper>
        <nav>
          <NavList>
            <NavItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/plan">
                <a>Create a plan</a>
              </Link>
            </NavItem>
          </NavList>
        </nav>
      </NavContent>
      <SocialList>
        <li>fb</li>
        <li>tw</li>
        <li>ig</li>
      </SocialList>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-gray-400);
  padding: 48px 88px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 64px;
  }
`;

const NavContent = styled.div`
  display: flex;
  gap: 104px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 32px;
  }
`;

const LogoWrapper = styled.div`
  color: var(--color-cream);
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
  color: var(--color-gray-300);
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: ${WEIGHTS.bold};
  letter-spacing: 0.923077px;
`;

const NavItem = styled.li`
  &:hover,
  &:focus {
    color: var(--color-cream);
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 32px;
  color: var(--color-cream);
`;

export default Footer;
