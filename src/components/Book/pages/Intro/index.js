import React from "react";
import "./index.css";

const Intro = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div
          className="page-image"
          style={{
            backgroundImage: `url(https://www.yourarticlelibrary.com/wp-content/uploads/2013/12/c192.jpg)`,
          }}
        ></div>
        <div className="page-text">
          <h2>Solar System</h2>
          <p>
            The Solar System is made up of all the planets that orbit our Sun.
            In addition to planets, the Solar System also consists of moons,
            comets, asteroids, minor planets, dust and gas. The inner solar
            system contains the Sun, Mercury, Venus, Earth and Mars. The main
            asteroid belt lies between the orbits of Mars and Jupiter. The
            planets of the outer solar system are Jupiter, Saturn, Uranus and
            Neptune (Pluto is now classified as a dwarf planet).
          </p>

          <p>
            Everything in the Solar System orbits or revolves around the Sun.
            The Sun contains around 98% of all the material in the Solar System.
            The larger an object is, the more gravity it has. Because the Sun is
            so large, its powerful gravity attracts all the other objects in the
            Solar System towards it. At the same time, these objects, which are
            moving very rapidly, try to fly away from the Sun, outward into the
            emptiness of outer space.
          </p>
        </div>
        <div className="page-footer">Page {props.number}</div>
      </div>
    </div>
  );
});

export default Intro;
