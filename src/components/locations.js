import styled from "styled-components";

import { QUERIES } from "../constants";
import Location from "./location";

function Locations() {
  return (
    <Wrapper>
      <h2>Our headquarters</h2>
      <LocationsWrapper>
        <Location />
        <Location />
        <Location />
      </LocationsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const LocationsWrapper = styled.div`
  display: flex;
  gap: 95px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 80px;
  }
`;

export default Locations;
