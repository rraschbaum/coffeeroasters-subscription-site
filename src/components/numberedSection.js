import styled from "styled-components";

function NumberedSection() {
  return (
    <Wrapper>
      <Number>01</Number>
      <h3>Pick your coffee</h3>
      <p>
        Select from our evolving range of artisan coffees. Our beans are
        ethically sourced and we pay fair prices for them. There are new coffees
        in all profiles every month for you to try out.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Number = styled.div`
  font-size: 4.5rem;
  font-family: "Fraunces", serif;
  font-weight: 900;
  color: var(--color-peach);
`;

export default NumberedSection;
