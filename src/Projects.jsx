import { forwardRef } from "react";

import fishingIslandPic from "./assets/projects-demos/fishing-game.png";
import weatherAppPic from "./assets/projects-demos/weather-app.gif";
import wordBankPic from "./assets/projects-demos/word-bank-1.png";
import modalWindowsPic from "./assets/projects-demos/modal-windows.gif";
import profileCardPic from "./assets/projects-demos/profile-card.png";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <section className="projects-container" ref={ref}>
        <h1 className="projects-container-title">Projects</h1>

        <hr />

        <article className="project-L">
          <figure className="left-project">
            <img src={fishingIslandPic} draggable="false" />
          </figure>

          <div className="right-project">
            <h1>Fishing Island</h1>
            <p>
              Go fishing, sell your fish to buy decorations for your house, and
              unlock all trophies!
            </p>
            <button>
              <a
                href="https://marceosayo.itch.io/fishing-island"
                target="_blank"
              >
                Play Game
              </a>
            </button>
            <button>
              <a
                href="https://github.com/marceosayo/fishing-island"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </article>

        <hr />

        <article className="project-R">
          <div className="left-project">
            <h1>Weather App</h1>
            <p>
              A retro-styled weather app that uses API to fetch city names to
              display the current weather.
            </p>
            <button>
              <a
                href="https://marceosayo.github.io/Retro-API-Weather-App/"
                target="_blank"
              >
                Start App
              </a>
            </button>
            <button>
              <a
                href="https://github.com/marceosayo/Retro-API-Weather-App"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
          <figure className="right-project">
            <img src={weatherAppPic} draggable="false" />
          </figure>
        </article>

        <hr />

        <article className="project-L">
          <figure className="left-project">
            <img src={wordBankPic} draggable="false" />
          </figure>
          <div className="right-project">
            <h1>Vocabulary Word Bank</h1>
            <p>
              A responsive API word bank that can be used for studying and
              keeping track of English vocabulary words.
            </p>
            <button>
              <a href="https://marceosayo.github.io/Word-Bank/" target="_blank">
                Start App
              </a>
            </button>
            <button>
              <a href="https://github.com/marceosayo/Word-Bank" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </article>

        <hr />

        <article className="project-R">
          <div className="left-project">
            <h1>Responsive Modal Windows</h1>
            <p>
              Various types of modal windows, including a sign in modal, sign up
              modal, newsletter modal, and more.
            </p>
            <button>
              <a
                href="https://marceosayo.github.io/Responsive-Modal-Windows/"
                target="_blank"
              >
                Start App
              </a>
            </button>
            <button>
              <a
                href="https://github.com/marceosayo/Responsive-Modal-Windows"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
          <figure className="right-project">
            <img src={modalWindowsPic} draggable="false" />
          </figure>
        </article>

        <hr />

        <article className="project-L">
          <figure className="left-project">
            <img src={profileCardPic} draggable="false" />
          </figure>
          <div className="right-project">
            <h1>Profile Card Generator</h1>
            <p>
              Create a custom profile card with various options to use for your
              website, business cards, etc.
            </p>
            <button>
              <a
                href="https://marceosayo.github.io/Profile-Card-Generator/"
                target="_blank"
              >
                Start App
              </a>
            </button>
            <button>
              <a
                href="https://github.com/marceosayo/Profile-Card-Generator"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </article>
      </section>
    </>
  );
});

export default Projects;
