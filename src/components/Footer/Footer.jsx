import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer pt-1 mt-3">
      <div className="container-fluid text-center">
        <span className="h5">&#169; Copyright 2020 Pete Kriengsiri</span><span> - View the <a href="https://github.com/pkriengsiri/portfolio" target="_blank">source code</a> for this site</span>
      </div>
    </footer>
  );
};

export default Footer;