import styled from "styled-components";
import { resume } from "./data";

const Resume = styled.article`
	text-align: center;

	margin: 0 auto;
	box-shadow: 0 0 8px white;
	embed {
		width: 8.5in;
		height: 11.4in;
	}
`;

export default function () {
	return (
		<Resume>
			<embed src="rhys-dent-resume-generic.html" width="100%" height="100%" />
		</Resume>
	);
}
