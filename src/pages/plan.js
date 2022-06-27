import styled from "styled-components";

import { QUERIES } from "../constants";
import Layout from "../components/layout";
import HeroBanner from "../components/heroBanner";
import Spacer from "../components/spacer";
import NumberedSections from "../components/numberedSections";
import StickySideNav from "../components/stickySideNav";
import AccordionSection from "../components/accordionSection";

function Plan() {
  return (
    <Layout>
      <HeroBanner>
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </HeroBanner>
      <Spacer size={168} />
      <NumberedSections />
      <Spacer size={168} />
      <OrderDetails>
        <StickySideNavWrapper>
          <StickySideNav />
        </StickySideNavWrapper>
        <AccordionSection />
      </OrderDetails>
      <Spacer size={168} />
    </Layout>
  );
}

const OrderDetails = styled.div`
  display: flex;
  gap: 125px;
`;

const StickySideNavWrapper = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Plan;
