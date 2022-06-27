import Link from "next/link";
import styled from "styled-components";

import { WEIGHTS, QUERIES } from "../constants";

function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <a>Coffeeroasters</a>
      </Link>
      <DesktopNav>
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
      </DesktopNav>
      <MobileNav></MobileNav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  margin-bottom: 40px;
`;

const DesktopNav = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  width: 16px;
  height: 16px;
  background-color: var(--color-gray-400);

  @media ${QUERIES.phoneAndSmaller} {
    display: initial;
  }
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
    color: var(--color-gray-400);
  }
`;

export default Header;
