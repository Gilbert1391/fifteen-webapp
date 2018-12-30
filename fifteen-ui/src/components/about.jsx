import React from "react";
import ContactGroup from "./contactGroup";

const About = () => {
  return (
    <section className="container about-us" id="about">
      <div className="about">
        <h2 className="about__heading">
          Located in Park Slope, Pacific Tavern is a purveyor of fine American
          dining from the esteemed Chef Billy Lang.
        </h2>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat.
        </p>
      </div>
      <ContactGroup />
    </section>
  );
};

export default About;
