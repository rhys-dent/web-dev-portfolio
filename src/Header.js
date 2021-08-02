import styled from "styled-components";
import NeonLink from "./NeonLink";

export const headerHeight = 15; //vh
const HeaderS = styled.header`
	position: relative;
	z-index: 9;
	height: ${10}vh;
	width: 100%;
	margin: 0 auto;
	font-family: "Nunito", sans-serif;
	font-weight: bold;
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
		height: 5vh;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.25);
		transform: skewX(-50deg);
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
				{/* <NeonLink to="/About" text="ABOUT"></NeonLink> */}
				<NeonLink to="/contact" text="CONTACT" />
			</div>
		</HeaderS>
	);
}
