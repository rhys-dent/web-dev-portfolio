import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterS = styled.footer`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.75);
	box-shadow: 0 0 8px whitesmoke;
	color: whitesmoke;
	a {
		display: block;
		color: whitesmoke;
		font-size: 1.5rem;
	}
	ul {
		list-style: none;
		li {
			font-size: 1.5rem;
		}
	}
`;

export default function () {
	return (
		<FooterS>
			<div>
				<h3>
					<a href="https://www.linkedin.com/in/rhys-dent-calgary">LinkedIn</a>
				</h3>
				<h3>
					<a href="mailto:devRhysDent@gmail.com">devRhysDent@gmail.com</a>
				</h3>
			</div>
			<ul>
				<li>
					<Link to={"/"}>Projects</Link>
				</li>

				<li>
					<Link to={"/contact"}>Contact</Link>
				</li>
			</ul>
		</FooterS>
	);
}
