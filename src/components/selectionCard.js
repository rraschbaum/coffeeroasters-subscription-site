import styled from "styled-components";

function SelectionCard() {
  return (
    <Wrapper>
      <h3>Option</h3>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 228px;
  padding-left: 28px;
  padding-top: 32px;
  padding-right: 28px;
  background-color: lightgray;
  border-radius: 8px;
`;

export default SelectionCard;
