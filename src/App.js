import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Header, Footer } from "./";
import Gem from "./Gem";

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
  box-sizing: border-box;
  border: 0vh solid fuchsia;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-image: url("big-x.png");
  background-size: 2.5vh 2.5vh;
  background-position: 100% 0%;
`;
const IntroS = styled.div`
  height: 100%;
  width: 100%;
  padding: 5vh;
  .intro-inner {
    height: 100%;
    padding: 5vh;
    display: flex;
    background-color: rgba(0, 0, 0, 0.125);
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1vh;
    box-shadow: 0 0 12px black;
    img {
      width: 25%;
      box-shadow: 0 0 8px black;
    }
    .bio {
      font-size: 1.5rem;
      font-weight: bold;
      color: whitesmoke;
      text-shadow: 0px 0px 8px black;
      width: 50%;
    }
  }
`;
const ProjectS = styled.div`
  display: flex;
  min-height: 75vh;
  box-shadow: 0 0 8px black;
  border: 1px solid transparent;
  margin: 2rem;

  iframe {
    margin: 1rem;
    height: auto;
    width: 500px;
    box-shadow: 0 0 12px black;
    outline: none;
    border: none;
  }
`;
const ScrollBar = styled.div`
  position: absolute;
  height: 10vh;
  width: 2vh;
  right: 0;
  top: 0;
  background-color: rgba(175, 238, 238, 0.5);
  box-shadow: 0 0 8px black;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
const BackgroundS = styled.div`
  position: absolute;
  top: -30vh;
  left: -100vh;
  z-index: -10;
  height: 250vh;
  width: 250vw;
  background-image: url("x.png");
  background-size: 2.5vh 2.5vh;
  background-position: 100% 0%;
  transform: rotate(45deg);
`;
function App() {
  const background = useRef();
  const header = useRef();
  const scroller = useRef();
  const scrollBar = useRef();
  let scrollLimit;
  let headerHeightPx;
  useEffect(() => {
    const scrollWidth =
      scroller.current.offsetWidth - scroller.current.clientWidth;
    headerHeightPx = header.current.getBoundingClientRect().height;
    scroller.current.style.width = `calc(100vw + ${scrollWidth}px)`;
    scroller.current.style.paddingTop = `${headerHeightPx}px`;
    scrollLimit = scroller.current.scrollHeight - scroller.current.offsetHeight;
    scrollBar.current.style.height = headerHeightPx + "px";
    console.log(scrollLimit);
  });
  function onScroll(e) {
    const scrollTop = Math.round(scroller.current.scrollTop);
    const scrollBarTop = Math.round(
      scrollBar.current.getBoundingClientRect().top
    );
    let headerPercent = scrollBarTop / headerHeightPx;
    headerPercent = headerPercent < 1 ? headerPercent : 1;
    const scrollBarMinHeightPx = 100000 / scrollLimit;
    if (scrollBarMinHeightPx < headerHeightPx) {
      const scrollBarDiff = headerHeightPx - scrollBarMinHeightPx;
      let scrollBarHeightPx = headerHeightPx - headerPercent * scrollBarDiff;
      scrollBarHeightPx = scrollBarHeightPx > 16 ? scrollBarHeightPx : 16;
      scrollBar.current.style.height = scrollBarHeightPx + "px";
    }
    const scrollPercent = scrollTop / scrollLimit;
    scrollBar.current.style.top = `calc(${scrollPercent} * (100vh - ${scrollBar.current.style.height}))`;
    scroller.current.style.backgroundPosition = `100% ${
      (1 - scrollPercent) * 100
    }%`;
    background.current.style.backgroundPosition = `100% ${
      (1 - scrollPercent) * 100
    }%`;
  }
  return (
    <OuterS>
      <Router>
        <BackgroundS ref={background} />
        <HeaderS ref={header}>
          <Header />
        </HeaderS>

        <ScrollerS ref={scroller} onScroll={onScroll}>
          <ScrollBar ref={scrollBar} />
          <Switch>
            <Route exact path="/">
              <IntroS>
                <div className="intro-inner">
                  <img src="me-face.jpg" />
                  <div className="bio">
                    Recent graduate from the Web and Application Development
                    program at CDI College that is looking forward to gaining
                    experience in this industry. I consider myself to be a
                    Hardworking, focused, professional who is also an excellent
                    team worker. I am particularly focused on web app frameworks
                    like ReactJs and server-less backends like Amazon Web
                    Services.
                  </div>
                </div>
              </IntroS>
              <Gem />
              {[
                "https://master.dojb0il0pmvkq.amplifyapp.com/",
                "http://prometheuspm.com/",
                "https://master.d3tgrseuznqkr.amplifyapp.com/",
              ].map((url) => (
                <ProjectS>
                  <iframe src={url}></iframe>
                </ProjectS>
              ))}
            </Route>
            <Route path="/resume">Display resume and link to download</Route>
            <Route path="/contact">
              <form
                onSubmit={(e) => {
                  emailjs
                    .sendForm(
                      "service_u3dr8kd",
                      "template_hmnv7af",
                      e.target,
                      "user_hXe0OrmEMYraO9iuCTYUr"
                    )
                    .then(
                      (result) => {
                        console.log(result.text);
                      },
                      (error) => {
                        console.log(error.text);
                      }
                    );
                }}
              >
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea cols="25"></textarea>
              </form>
            </Route>
          </Switch>
          <Footer />
        </ScrollerS>
      </Router>
    </OuterS>
  );
}

export default App;
