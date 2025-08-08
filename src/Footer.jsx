function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <p className="f-name">marceo</p>
          <p className="l-name">santos</p>
        </div>

        <p>
          &copy; {new Date().getFullYear()} Marceo Santos - All Rights Reserved
        </p>

        <button className="about" onClick={scrollToTop}>
          Go Back Up
        </button>
      </div>
    </>
  );
}

export default Footer;
