import React from "react";
import "./index.css";

const IntroRight = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-text">
        <p>The result of the planets trying to fly away, at the same time that the Sun is trying to pull them inward is that they become trapped half-way in between. Balanced between flying towards the Sun and escaping into space, they spend eternity orbiting around their parent star.</p>

        <p>The Planets orbit in the same direction (counter-clockwise looking down from above the Sun’s North Pole); all but Venus, Uranus and Pluto also rotate in that same sense. Mercury has the fastest elliptical orbit,</p>

        <p>48 km per second. It has the shortest revolution at 88 days. Pluto has an orbital speed of 5 km per second. It takes 248 years for Pluto to make one complete revolution.</p>

        <h2>Asteroids</h2> 
        <p>Asteroids (also called planetoids) are small bodies found between the orbits of Mars and Jupiter. They also revolve around the sun and are believed to be the pieces of a planet which probably exploded after its birth. ‘Ceres’, the first to be discovered, is the largest asteroid.</p>

        <h2>The Moon</h2> 
        <p>The moon is the only satellite of the earth and in the solar system it is far too big to be a satellite. It is one- fourth the size of our earth. The light reflected by the moon reaches the earth in just one and a quarter seconds.

        The moon has no atmosphere, as its gravitational power is too weak to hold down gases. Temperature on the moon reaches extremes; during daytime it rises to 100°C and at night it comes down to -180°C. Its surface is very uneven and there is no soil.</p>

        <h2>The Milky Way</h2> 
        <p>It contains 1,000,000 million stars of which our solar system is one. Beyond it there are thousands of galaxies. ‘Andromeda’, our nearest galaxy is two million light years away (light year is distance travels in one year at the rate of 300,000 km per second).</p>


        </div>
        <div className="page-footer">Page {props.number}</div>
      </div>
    </div>
  );
});

export default IntroRight;
