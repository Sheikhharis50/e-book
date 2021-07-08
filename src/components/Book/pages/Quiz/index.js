import React from "react";
import "./index.css";

const Quiz = React.forwardRef((props, ref) => {

  return (
    <div className="page"  ref={ref}>
      <div className="page-content">
        <h2 className="page-header"> </h2>
        <div className="quiz-wrapper" style={{"margin": "0 auto"}}>
          <p className="question-description">Fill in the blanks by dragging the missing answer.</p>
          <ul className="options">
            <li className="title">Options</li>
            <li className="option" data-target="Jupiter">Jupiter</li>
            <li className="option" data-target="planets">planets</li>
            <li className="option" data-target="Mercury">Mercury</li>
            <li className="option" data-target="stars">stars</li>
            <li className="option" data-target="moon">moon</li>
          </ul>
        <div className="answers">
          <ol>
            <li style={{"marginBottom": "2px"}}><span className="target" data-accept="Jupiter">&nbsp;</span> is the largest planet.</li>
            <li style={{"marginBottom": "2px"}}><span className="target" data-accept="Mercury">&nbsp;</span> is the nearest planet from the Sun.</li>
            <li style={{"marginBottom": "2px"}}>Most <span className="target" data-accept="planets">&nbsp;</span> have their own moons.</li>
            <li style={{"marginBottom": "2px"}}>The <span className="target" data-accept="stars">&nbsp;</span>have their own light.</li>
            <li>The <span className="target" data-accept="moon">&nbsp;</span>is a big ball of rocks.</li>
          </ol>
        </div>
        <button type="submit" value="submit">Submit</button>
        <div className="lightbox-bg"></div>
        <div className="status confirm">
          <p>All Answers Answered</p>
        </div>
        <div className="status deny">
          <p>Answers Remain</p>
        </div>
        </div>
        <div className="page-footer">Page {props.number}</div>
      </div>
    </div>
  );
});

export default Quiz;
