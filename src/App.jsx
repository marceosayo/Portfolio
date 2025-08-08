import { useRef } from "react";

import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar projectsRef={projectsRef} contactRef={contactRef} />
      <About />
      <div className="space"></div>
      <Projects ref={projectsRef} />
      <div className="space"></div>
      <Contact ref={contactRef} />
      <div className="space"></div>
      <Footer />
    </>
  );
}

export default App;
