import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import aboutImage from "./assets/about-image.jpeg";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="left-about">
          <img src={aboutImage} draggable="false" />
          <br />
          <p className="name-tag">Marceo S.</p>
        </div>

        <div className="right-about">
          <div className="bio">
            Greetings, I'm Marceo Santos—a developer from Orlando, FL with a
            passion for creating.
            <hr />
            <br />
            All of my projects are created using:
            <br />
            <br />
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <hr />
            <br />
            I've always been drawn to artistic expression and building things
            from the ground up. Coding became the perfect blend of both: a space
            where I can solve problems creatively and bring ideas to life.
            Please feel free to reach out to me through social media, email, or
            the contact form. &#9786;
            <hr />
            <div className="social-icons">
              <button className="instagram-button">
                <a href="https://www.instagram.com/marceosayo/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </button>
              <button className="github-button">
                <a href="https://github.com/marceosayo" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </button>
              <button className="email-button">
                <a href="mailto:marceokuehn97@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
