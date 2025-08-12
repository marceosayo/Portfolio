function NavBar({ projectsRef, contactRef }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-1000">
      <nav className="nav-container">
        <div className="logo">
          <span className="f-name">marceo</span>
          <span className="l-name">santos</span>
        </div>

        <div className="nav-links">
          <button type="button" className="about" onClick={scrollToTop}>
            about
          </button>

          <button type="button" className="projects" onClick={scrollToProjects}>
            projects
          </button>

          <button type="button" className="contact" onClick={scrollToContact}>
            contact
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
