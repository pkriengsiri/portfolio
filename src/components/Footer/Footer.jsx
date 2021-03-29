import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer pt-1 mt-3">
      <div className="container-fluid text-center">
        <span>&#169; Copyright 2021 Pete Kriengsiri</span><span> - View the <a href="https://github.com/pkriengsiri/portfolio" target="_blank" rel="noreferrer">source code</a> for this site</span>
      </div>
    </footer>
  );
};

export default Footer;
