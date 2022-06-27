import styled from "styled-components";

import Layout from "../components/layout";
import HeroBanner from "../components/heroBanner";
import TwoColImgLeft from "../components/twoColImgLeft";
import TwoColImgRight from "../components/twoColImgRight";
import Spacer from "../components/spacer";
import Locations from "../components/locations";

function About() {
  return (
    <Layout>
      <HeroBanner>
        <h1>About us </h1>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </HeroBanner>
      <Spacer size={168} />
      <TwoColImgLeft />
      <Spacer size={168} />
      <TwoColImgRight />
      <Spacer size={168} />
      <Locations />
      <Spacer size={168} />
    </Layout>
  );
}

export default About;
