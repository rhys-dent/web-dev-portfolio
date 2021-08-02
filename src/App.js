import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, About, Contact, Footer } from "./";
import background from "./background";

const HeaderS = styled.div`
	position: sticky;
	top: -10vw;
	z-index: 1;
	width: 100%;
	overflow-x: hidden;
	h1 {
		text-align: center;
		height: 10vw;
		width: 95%;
		margin: 0 auto;
		line-height: 10vw;
		font-size: 6vw;
		font-weight: bold;
		color: whitesmoke;
		text-shadow: 0 0 8px white;
		box-shadow: 0 0 8px white;
		margin-bottom: 1rem;
	}
`;
const GridView = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	width: 90%;
	margin: 4vw auto;
	gap: 2rem;
	height: max-content;
`;
const ProjectS = styled.div`
	box-sizing: border-box;
	position: relative;
	z-index: 0;
	color: whitesmoke;
	box-shadow: 0 0 8px black;
	border: 1px solid transparent;
	width: 100%;
	border-radius: 4px;
	img {
		width: 100%;

		box-shadow: 0 0 12px whitesmoke;
		outline: none;
		border: none;
	}
	div {
		margin: 1rem;
		h3 {
			margin-bottom: 0.5rem;
		}
		p {
			font-size: 1rem;
			margin-bottom: 0.25rem;
		}
		ul {
			font-size: 0.75rem;
		}
	}
	.text {
		padding-left: 1rem;
		color: white;
		background-color: rgba(0, 0, 0, 0.75);
		box-shadow: 0 0 1rem black;
	}
	.link-hover-message {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.25);
		border: 1vh solid rgba(255, 255, 255, 0.25);
		border-radius: 4px;
		width: 100%;
		height: 100%;
		h2 {
			font-size: 2rem;
			padding: 2rem;
			border-radius: 4px;
			background-color: rgba(255, 255, 255, 0.9);
			color: black;
		}
	}
	:hover {
		/* .link-hover-message {
			opacity: 1;
		} */
		box-shadow: 0 0 12px whitesmoke;
		img {
			box-shadow: 0 0 4px whitesmoke;
		}
	}
	:active {
		box-shadow: 0 0 6px whitesmoke;
	}
`;

function App() {
	const [projects, setProjects] = useState([]);
	const headerRef = useRef(null);
	const projectsDataUrl =
		"https://raw.githubusercontent.com/rhys-dent/web-dev-portfolio-projects/main/";
	useEffect(function () {
		background();
		fetch(projectsDataUrl + "data.json")
			.then((response) => response.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<div>
			<Router>
				<HeaderS ref={headerRef}>
					<h1>R h y s D e n t</h1>
					<Header />
				</HeaderS>
				<main>
					<Switch>
						<Route exact path="/">
							<GridView>
								{projects.map((project) => (
									<ProjectS>
										<a className="link-hover-message" href={project.url}>
											<h2>Visit Site</h2>
										</a>
										<div>
											<img src={projectsDataUrl + project.src} alt="" />
										</div>

										<div className="text">
											<h3>{project.title}</h3>
											<p>{project.description}</p>
											<h5>Created Using:</h5>
											<ul>
												{project.technologies.map((technology) => (
													<li>{technology}</li>
												))}
											</ul>
										</div>
									</ProjectS>
								))}
							</GridView>
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</main>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
