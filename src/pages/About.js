import React from "react";
import ProfileBox from "../components/ProfileBox";
import "../styles/about.css";
//import queryString from "query-string";

const About = ({ location, match }) => {
  //const query = queryString.parse(location.search);

  return (
    <div>
      <div className="devArea">
        <div className="devArea__title">DEVELOPER</div>
        <ProfileBox />
      </div>

      <div className="traineeArea">
        <div className="traineeArea__title">TRAINEE</div>
        <ProfileBox />
      </div>
    </div>
  );
};

export default About;
