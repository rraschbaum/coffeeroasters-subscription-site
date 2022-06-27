import styled from "styled-components";

function StickySideNav() {
  return (
    <Wrapper>
      <ol>
        <li>Preferences</li>
        <li>Bean Type</li>
        <li>Quantity</li>
        <li>Grind Option</li>
        <li>Deliveries</li>
      </ol>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  max-width: 255px;
`;

export default StickySideNav;
