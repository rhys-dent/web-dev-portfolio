import styled from "styled-components";

const GemS = styled.div`
  --margin: 4px;
  height: 50px;
  width: 50px;
  background-color: turquoise;
  div {
    position: relative;
    top: var(--margin);
    left: var(--margin);
    height: calc(50px - var(--margin) * 2);
    width: calc(50px - var(--margin) * 2);
    background-color: transparent;
    box-shadow: 0 0 8px white;
  }
`;

export default function () {
  return (
    <GemS>
      <div></div>
    </GemS>
  );
}
