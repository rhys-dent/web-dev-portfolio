import { Link } from "react-router-dom";
import styled from "styled-components";

const NeonLinkS = styled.div`
	position: relative;
	top: 0vw;
	font-size: 4vw;
	transform: skew(2.5deg, 2.5deg);
	-webkit-transform: skew(2.5deg, 2.5deg);
	:hover {
		.text {
			text-shadow: 0 0 2px silver;
			color: whitesmoke;
		}
		.glow {
			text-shadow: 0 0 8px whitesmoke;
		}
		.reflection {
			opacity: 0.5;
		}
	}
	:active {
		.text {
			color: grey;
			text-shadow: 0 0 8px black;
		}
	}
	.text {
		position: absolute;

		color: transparent;
		text-shadow: 0 0 0.1vw silver;
		z-index: 1;
		transition: text-shadow 0.05s ease-in-out, color 0s ease-in-out;
	}
	.reflection {
		position: absolute;
		transform: rotate(180deg) scaleX(-1);
		top: 3vw;
		opacity: 0.125;
		color: darkgrey;
		transition: opacity 0.05s ease-in-out;
	}
	.glow {
		color: transparent;
		text-shadow: 0 0 1px black;
		transition: text-shadow 0.05s ease-in-out;
	}
	.glow-reflection {
		opacity: 0.125;
		z-index: -11;
		text-shadow: 0 0 1px darkgrey;
		transition: text-shadow 0.05s ease-in-out;
	}
	a {
		text-decoration: none;
	}
`;
export default function ({ text, to }) {
	return (
		<NeonLinkS>
			<Link to={to}>
				<div className="text">{text}</div>
				<div className="glow">{text}</div>
				<div className="glow reflection glow-reflection">{text}</div>
				<div className="text reflection">{text}</div>
			</Link>
		</NeonLinkS>
	);
}
