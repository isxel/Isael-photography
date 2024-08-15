import React from "react";
import "./../styles/About.css";
import myImage from "../assets/img/myImage.jpeg";
import aboutMeImage from "../assets/img/aboutMe.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutMeImage} alt="Isael Ramirez" />
      </div>
      <div className="about-text">
        <h2 className="about-headings">About Me</h2>
        <p>
          Hello, I'm Isael Ramirez, a recent graduate with a degree in Computer
          Science based in Austin, Texas. My passion for cars and the vibrant
          culture surrounding them has been a significant part of my life. I
          cherish the connections, joy, and memories that come from being
          immersed in the automotive world.
        </p>
        <p>
          Growing up, I was surrounded by Japanese cars, especially the Acura
          Integra, which sparked my love for automobiles. Currently, I drive a
          1990 Mazda Miata, a car I've enjoyed immensely for the better part of
          two years. The Miata has not only been a joy to drive but also a
          canvas for my automotive creativity and passion.
        </p>
        <p>
          Photography has allowed me to capture these moments and share them
          with others. For many, cars are more than just a mode of
          transportation—they are a form of self-expression. I take great pride
          in capturing the effort and creativity people pour into their
          vehicles, preserving the essence of their individuality through my
          camera lens.
        </p>
        <h2>My Tools</h2>
        <p>
          I use a Sony a6000 for my automotive photography. I also use Adobe
          Lightroom and Photoshop to edit my photos, ensuring that each image is
          a true reflection of the car and the owner's vision.
        </p>
      </div>
    </div>
  );
}

export default About;
