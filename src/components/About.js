import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Blog </h1>
      <Link to="/about/hello"> Hello </Link>

      <Outlet />
    </div>
  );
};

export default About;
