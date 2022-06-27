import styled from "styled-components";

import { QUERIES } from "../constants";
import FeaturedCoffee from "./featuredCoffee";

function featuredCoffees() {
  return (
    <Wrapper>
      <h2>Our Collection</h2>
      <Coffees>
        <FeaturedCoffee />
        <FeaturedCoffee />
        <FeaturedCoffee />
        <FeaturedCoffee />
      </Coffees>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Coffees = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

export default featuredCoffees;
