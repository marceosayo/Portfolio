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
    <>
      <div className="nav-container">
        <div className="logo">
          <p className="f-name">marceo</p>
          <p className="l-name">santos</p>
        </div>

        <div className="nav-links">
          <p className="about" onClick={scrollToTop}>
            about
          </p>

          <p className="projects" onClick={scrollToProjects}>
            projects
          </p>

          <p className="contact" onClick={scrollToContact}>
            contact
          </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
