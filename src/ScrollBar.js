import { useEffect, useRef } from "react";
import styled from "styled-components";
import { headerHeight as headerHeight_vh } from "./Header";

const ScrollBar = styled.div`
  --border-size: 3px;
  position: absolute;
  height: 10vh;
  width: 2vh;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: var(--border-size);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 0 calc(var(--border-size)) black;
  .inner {
    margin: calc(var(--border-size));
    height: calc(100% - 2 * var(--border-size));
    width: calc(100% - 2 * var(--border-size));
    background-color: rgba(0, 0, 0, 0.125);
    box-shadow: 0 0 calc(2 * var(--border-size)) black;
    border-radius: var(--border-size);
  }
`;

export default function ({ scrollPercent, scrollLimit }) {
  const scrollBar = useRef();
  const headerHeight = useRef();
  const height = useRef();
  useEffect(() => {
    scrollBar.current.style.height = headerHeight_vh + "vh";
    headerHeight.current = Math.round(
      scrollBar.current.getBoundingClientRect().height
    );
    height.current = scrollLimit / 100;
  }, []);
  useEffect(() => {
    scrollBar.current.style.top = `calc(${scrollPercent} * (100vh - ${scrollBar.current.style.height}))`;
    if (height.current < headerHeight.current) {
      const top = scrollBar.current.getBoundingClientRect().top;
      if (top < headerHeight.current) {
        const headerScrollPercent = top / headerHeight.current;
        const scrollBarDiff = headerHeight.current - height.current;
        let modifiedHeight =
          headerHeight.current - scrollBarDiff * headerScrollPercent;
        modifiedHeight = modifiedHeight > 16 ? modifiedHeight : 16;
        scrollBar.current.style.height = modifiedHeight + "px";
      }
    }
  });
  return (
    <ScrollBar ref={scrollBar}>
      <div className="inner"></div>
    </ScrollBar>
  );
}
