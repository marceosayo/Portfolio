function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <span className="f-name">marceo</span>
        <span className="l-name">santos</span>
      </div>

      <p>
        &copy; {new Date().getFullYear()} Marceo Santos - All Rights Reserved
      </p>

      <button className="about font-light" onClick={scrollToTop}>
        Go Back Up
      </button>
    </footer>
  );
}

export default Footer;
