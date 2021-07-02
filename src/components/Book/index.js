import React, { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
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
        {[...Array(10)].map((_, index) => (
          <Page key={index} number={index + 1} />
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
