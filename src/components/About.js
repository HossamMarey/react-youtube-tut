import React from "react";
import { Link, Route } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Blog </h1>
      <Link to="/about/hello"> Hello </Link>

      <Route path="/about/hello">
        <div>
          <br /> <br /> <hr /> <br />
          <p>Hellooooooooo</p>
        </div>
      </Route>
    </div>
  );
};

export default About;
