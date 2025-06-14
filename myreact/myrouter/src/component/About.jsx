import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <a href="/">Home컴포넌트띄우기</a> <br></br>
      <Link to="/">Home컴포넌트띄우기2</Link>
    </div>
  );
};

export default About;
