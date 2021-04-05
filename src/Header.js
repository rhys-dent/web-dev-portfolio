import styled from "styled-components";
import NeonLink from "./NeonLink";
const HeaderS = styled.header`
  height: 15vh;

  padding: 0 4rem 0 4rem;

  .links {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
  }
  .background {
    position: absolute;
    bottom: 0;
    height: 10vh;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.25);
    transform: skewX(-70deg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 48px 24px 24px black;
  }
`;

export default function () {
  return (
    <HeaderS>
      <div className="background" />
      <div className="links">
        <NeonLink to="/" text="PROJECTS" />
        <NeonLink to="/resume" text="RESUME" />
        <NeonLink to="/contact" text="CONTACT" />
      </div>
    </HeaderS>
  );
}
