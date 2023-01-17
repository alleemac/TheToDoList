import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer">Copyright AlleeMac is Learning To Code ⓒ {year}</p>
    </footer>
  );
}

export default Footer;