import React from "react";
import "./index.css";
import Iframe from 'react-iframe'

const Animation = React.forwardRef((props, ref) => {
  return (
    <div className="page"  ref={ref}>
      <div className="page-content">
        <h2 className="page-header"></h2>
        <div style={{"textAlign": "center"}}>
          <h3>Earth 3D Model</h3>
          <Iframe url="https://solarsystem.nasa.gov/gltf_embed/2393"
            width="550px"
            height="550px"
            display="initial"
            position="relative"/>
        </div>
        <div className="page-footer">Page {props.number}</div>
      </div>
    </div>
  );
});

export default Animation;
