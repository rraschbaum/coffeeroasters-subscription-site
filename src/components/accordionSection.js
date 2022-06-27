import styled from "styled-components";

import Accordion from "./accordion";

function AccordionSection() {
  return (
    <Wrapper>
      <Accordions>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </Accordions>
      <OrderSummary>
        <h3>Order Summary</h3>
        <p>
          I drink my coffee as Filter, with a Decaf type of bean. 250mg ground
          ala Cafetiare, sent to me Every Week.
        </p>
      </OrderSummary>
      <button>Create me plan!</button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Accordions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const OrderSummary = styled.div``;

export default AccordionSection;
