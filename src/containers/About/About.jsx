import React from "react";
import Main from "../../components/Main/Main";
import "./About.css";
import circleImage from "../../images/pete.png";

const About = () => {
  const title="About Me";
  const circleImageAlt="headshot of Pete Kriengsiri"
  const aboutContent = (
    <div className="row px-3">
      <div className="col">
        <p>
          Welcome to my portfolio! I am an aspiring software developer based in
          Atlanta, GA and currently enrolled in the Georgia Tech Coding Boot
          Camp. For most of the past 15 years, I have been performing work as an
          occupational safety and risk management consultant both in the public
          and private sectors—most recently with my company Mantrada LLC. A
          slowdown in work due to the pandemic provided me with an opportunity
          to pursue a long-time dream.
        </p>
        <p>
          I have always been technologically inclined-- My first computer was a
          <a
            href="https://en.wikipedia.org/wiki/Compaq_Portable_III"
            target="_blank"
          >
            Compaq Portable III
          </a>
          brief-case style computer, complete with a 12 MHz processor, 640 KB of
          ram and a built-in 10” gas-plasma display. Here is where I learned the
          wonders of navigating MS-DOS and playing simple text-based games
          written in BASIC. My childhood was filled with weekends with my
          brother and uncle perusing junk computer stores looking for parts for
          our latest Frankenstein PC build.
        </p>
        <p>
          Other highlights of my personal and academic forays into technology
          include:
        </p>
        <ul className="list-group mb-3 mx-3">
          <li className="list-group-item">
            <i className="fas fa-code"></i> In high school, creating the homepage for a family friend’s free internet
            service provider using HTML 3.
          </li>
          <li className="list-group-item">
            <i className="fas fa-code"></i> Designing personal websites for myself
            and friends using Wordpress and Movable Type
          </li>
          <li className="list-group-item">
            <i className="fas fa-code"></i> In college, learning JAVA in order to
            implement a dynamic program algorithm for determining the outcome of
            NCAA tournament games and optimal bracket selections
          </li>
          <li className="list-group-item">
            <i className="fas fa-code"></i> Building web-controlled dog treat
            dispenser, which integrated an off-the-shelf motorized treat
            dispenser, RF remote, webcam, USB relay, windows-based web server,
            HTML, and JavaScript (wish I had patented this idea)
          </li>
          <li className="list-group-item">
            <i className="fas fa-code"></i> Creating a home-made sous-vide cooking
            device by integrating a slow cooker, PID controller, solid state
            relay, thermocouples, and 110VAC outlets
          </li>
        </ul>
        <p>
          I have a B.S. in Industrial Engineering and an M.S. in Applied Systems
          Engineering—both from Georgia Tech. In my free time, I enjoy spending
          time with my wife (Julie) and two dogs (Wilbur and Penny), cooking,
          and volunteering at the
          <a
            href="https://secure.atlantahumane.org/site/Donation2?1400.donation=form1&df_id=1400&mfc_pref=T&s_src=basic&s_subsrc=mainnav"
            target="_blank"
          >
             Atlanta Humane Society
          </a>
          .
        </p>
      </div>
    </div>
  );

  return (
    <Main circleImage={circleImage} circleImageAlt={circleImageAlt} content={aboutContent} title={title}/>
  );
};

export default About;
