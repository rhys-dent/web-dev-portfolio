import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, Resume, Contact, Footer } from "./";
import { projects } from "./data";
import ScrollBar from "./ScrollBar";

const OuterS = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const HeaderS = styled.div`
  position: absolute;
  width: 100%;
`;

const ScrollerS = styled.div`
  --header-height: 10vh;
  padding-top: 15vh;
  box-sizing: border-box;
  border: 0vh solid fuchsia;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background: linear-gradient(to right, black 30%, white 100%);
`;

const IntroS = styled.div`
  width: 75%;
  margin: 2rem auto;
  .intro-inner {
    display: flex;
    background-color: rgba(0, 0, 0, 0.125);
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1vh;
    box-shadow: 0 0 12px white;
    padding: 4rem;
    .bio {
      font-size: 1.5rem;
      color: whitesmoke;
      text-shadow: 0px 0px 8px black;
    }
  }
`;

const ProjectS = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  color: whitesmoke;
  
  box-shadow: 0 0 8px black;
  border: 1px solid transparent;
  
  margin: 2rem 4rem;
  background-color: black;
  
  border-radius: 4px;
  @media only screen and (max-width: 600px) {
    display:block;
  }
  img {
    width:100%;
    
    box-shadow: 0 0 12px whitesmoke;
    outline: none;
    border: none;
  }
  div {
    padding: 1rem;
    p {
      font-size: 1.5rem;
    }
    ul {
    }
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
    .link-hover-message {
      opacity: 1;
    }
  }
`;

function App() {
  const header = useRef();
  const scroller = useRef();

  const [scrollPercent, setScrollPercent] = useState();
  const [scrollLimit, setScrollLimit] = useState(0);

  let headerHeightPx;

  function onScroll(e) {
    const scrollTop = Math.round(scroller.current.scrollTop);
    setScrollPercent(scrollTop / scrollLimit);

    scroller.current.style.backgroundPosition = `100% ${(1 - scrollPercent) * 100
      }%`;
  }
  return (
    <OuterS>
      <Router>
        <HeaderS ref={header}>
          <Header />
        </HeaderS>
        <ScrollerS ref={scroller} onScroll={onScroll}>

          <Switch>
            <Route exact path="/">

              {projects.map((project) => (
                <ProjectS>
                  <a className="link-hover-message" href={project.url}>
                    <h2>Visit Site</h2>
                  </a>
                  <div>
                    <img src={project.src} alt="" />
                  </div>
                  <div>
                    <p className="context-text">{project.description}</p>
                    <h3>Created Using:</h3>
                    <ul>
                      {project.technologies.map((technology) => (
                        <li>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </ProjectS>
              ))}
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </ScrollerS>
      </Router>
    </OuterS>
  );
}

export default App;
