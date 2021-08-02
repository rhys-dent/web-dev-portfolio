import styled from "styled-components";
export default function () {
	const AboutS = styled.div`
		padding: 4vw;
		color: whitesmoke;
		font-weight: bold;
		h2 {
			padding-bottom: 1.5rem;
		}
		p {
			padding-bottom: 1rem;
			font-size: 1.25rem;
		}

		img {
			width: max(200px, 33%);
			margin: 1rem 1rem 1rem 0;
			border-radius: 50%;
			box-shadow: 0 0 1px white;
		}
		@supports (shape-outside: circle()) {
			img {
				shape-outside: circle();
				shape-margin: 0.5rem;
			}
		}
	`;
	return (
		<AboutS>
			<h2>About Me</h2>
			<img src="profile-photo-web.jpg" alt="" align="left" />

			<p> Hello! Thank you for visiting my portfolio.</p>
			<p>
				My name is Rhys and I am a web developer with a focus on ReactJS and
				Amazon Web Services. About 4 years ago I discovered a passion for coding
				and have been pursuing this passion in my free time across a variety of
				different languages and platforms, initially focusing on game
				development using Unity3D and mobile app development with Android
				Studio. This eventually led to me enrolling at CDI College and
				graduating with a diploma in Web and Application Development. During my
				practicum I developed a react web app for a property management
				business. My employer was pleasantly surprised by the results which left
				me very excited by the prospect of assisting more businesses with their
				web development needs.
			</p>
			<p>
				My work experience outside of web development has given me a broad set
				of skills. Most notably, I have worked construction outside all year
				round as a subcontractor and as a line-cook/supervisor at a very busy
				and fast paced restaurant. These experiences have taught me how to
				maintain the right attitude, stay focused, stay productive, and be an
				effective team member under stressful conditions. Currently my free time
				is dedicated to street performing. Singing in public has expanded my
				comfort zone and has helped tremendously with improving my communication
				abilities.
			</p>
		</AboutS>
	);
}
