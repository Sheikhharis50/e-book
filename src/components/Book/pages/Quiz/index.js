import React from "react";
import {Helmet} from "react-helmet";
import "./index.css";
import $ from "jquery";

const Quiz = React.forwardRef((props, ref) => {

  return (
    <div className="page"  ref={ref}>
      <div className="page-content">
        <h2 className="page-header"> </h2>
        <div class="quiz-wrapper" style={{"margin": "0 auto"}}>
          <p class="question-description">Fill in the blanks by dragging the missing answer.</p>
          <ul class="options">
            <li class="title">Options</li>
            <li class="option" data-target="Jupiter">Jupiter</li>
            <li class="option" data-target="planets">planets</li>
            <li class="option" data-target="Mercury">Mercury</li>
            <li class="option" data-target="stars">stars</li>
            <li class="option" data-target="ashes">moon</li>
          </ul>
        <div class="answers">
          <ol>
            <li style={{"marginBottom": "2px"}}><span class="target" data-accept="Jupiter">&nbsp;</span> is the largest planet.</li>
            <li style={{"marginBottom": "2px"}}><span class="target" data-accept="Mercury">&nbsp;</span> is the nearest planet from the Sun.</li>
            <li style={{"marginBottom": "2px"}}>Most <span class="target" data-accept="planets">&nbsp;</span> have their own moons.</li>
            <li style={{"marginBottom": "2px"}}>The <span class="target" data-accept="stars">&nbsp;</span>have their own light.</li>
            <li>The <span class="target" data-accept="moon">&nbsp;</span>is a big ball of rocks.</li>
          </ol>
        </div>
        <button type="submit" value="submit">Submit</button>
        <div class="lightbox-bg"></div>
        <div class="status confirm">
          <p>All Answers Answered</p>
        </div>
        <div class="status deny">
          <p>Answers Remain</p>
        </div>
        </div>
        <div className="page-footer">Page {props.number}</div>
      </div>
      <Helmet>
      <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
      </Helmet>
      <Helmet>
        {/* <script src="./assets/js/script.js" type="text/javascript" /> */}
      </Helmet>
    </div>
  );
});

export default Quiz;
