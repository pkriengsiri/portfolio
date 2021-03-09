import React, { useState } from "react";
import "./Contact.css";
import Main from "../../components/Main/Main";
import circleImage from "../../images/contact.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({ subject: "", message: "" });
  const title = "Contact Me";
  const circleImageAlt = "image of a notepad";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit");
    if(!formData.subject || !formData.message) { 
        document.getElementById("contact-warning").classList.remove("d-none");
    } else {
        document.getElementById("contact-warning").classList.add("d-none");
        const url=`mailto:pkriengsiri@gmail.com?subject=${formData.subject}&body=${formData.message}`
        window.open(url);
    }
  };

  const aboutContent = (
    <div className="row">
      <div className="col-8">
        <form className="ml-1" id="contact-form" onSubmit={handleSubmit}>
          <h3>Form:</h3>
          <div className="form-group">
            <label htmlFor="subject-input">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject-input"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message-input">Message</label>
            <textarea
              className="form-control"
              id="message-input"
              rows="3"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            ></textarea>
          </div>
          <p className="d-none ml-1" id="contact-warning">
            I need both fields filled out before you can send me an email!
          </p>
          <button
            className="btn btn-primary bg-info rounded border-info ml-1 mb-3"
            type="submit"
            id="email-button"
          >
            Send Email
          </button>
        </form>
      </div>
      <div className="col-4 p-0">
        <h3>Links:</h3>
        <a href="https://github.com/pkriengsiri" target="_blank">
          <i className="fab fa-github-square mr-2"></i>GitHub
        </a>
        <br />
        <a href="https://www.linkedin.com/in/petekriengsiri/" target="_blank">
          <i className="fab fa-linkedin mr-2"></i>LinkedIn
        </a>
        <br />
        <a href="mailto:pkriengsiri@gmail.com" target="_blank">
          <i className="far fa-envelope mr-2"></i>
          Email
        </a>
      </div>
    </div>
  );

  return (
    <Main
      circleImage={circleImage}
      circleImageAlt={circleImageAlt}
      content={aboutContent}
      title={title}
    />
  );
};

export default Contact;
