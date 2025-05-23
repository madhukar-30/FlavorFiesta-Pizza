import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          At FlavorFiesta, we believe pizza is more than food — it’s an
          experience. Born from a passion for bold flavors and fresh
          ingredients, we craft each pizza to deliver a celebration of taste in
          every bite. From classic Margheritas to adventurous specialties, we
          bring together tradition and creativity to serve something for
          everyone. Whether you're vegan, a pineapple lover, or craving
          something rich and cheesy, FlavorFiesta has a slice with your name on
          it. Welcome to your new favorite pizza destination.
        </p>
      </div>
    </div>
  );
}

export default About;
