import React, { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page1 from "./pages/Intro";
import Page2 from "./pages/IntroRight";
import Page3 from "./pages/Animation";
import Page4 from "./pages/Quiz";
import "./index.css";

const FlipBookProps = {
  width: 550, // base page width
  height: 733, // base page height

  size: "stretch",
  // set threshold values:
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 420,
  maxHeight: 1350,

  maxShadowOpacity: 0.5, // Half shadow intensity
  mobileScrollSupport: false, // disable content scrolling on mobile devices
};

const Book = (props) => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);
  return (
    <div className="book">
      <HTMLFlipBook {...FlipBookProps} onFlip={onFlip} usePortrait={true}>
          <Page1 key={0} number={1} />
          <Page2 key={1} number={2} />
          <Page3 key={2} number={3} />
          <Page4 key={3} number={4} />
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
