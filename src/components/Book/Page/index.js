import React from "react";
import "./index.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header {props.number}</h2>
        <div
          className="page-image"
          style={{
            backgroundImage: `url(https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg)`,
          }}
        ></div>
        <div className="page-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
          mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
          Aenean vitae pellentesque erat. Integer non tristique quam.
          Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
          metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
          accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
          sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
          convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
          Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin
          mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
        </div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});

export default Page;
