import React from "react";
import { Consumer } from "../data/LanguageContext";

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { contactTitle } = label;
        return (
          <section className="contact">
            <h3 className="contactTitle">{contactTitle}</h3>
            <div className="email contactTile">
              <h4 className="emailTitle">Email</h4>
              <div className="icon">
                <HiOutlineMailOpen />
              </div>
              <p className="emailTxt">u.postolowicz@gmail.com</p>
            </div>
            <div className="facebook contactTile">
              <h4 className="facebookTitle">Facebook</h4>
              <div className="icon">
                <FaFacebookSquare />
              </div>
              <p className="facebookTxt">Ula Postołowicz</p>
            </div>
            <div className="linkedin contactTile">
              <h4 className="linkedinTitle">LinkedIn</h4>
              <div className="icon">
                <FaLinkedin />
              </div>
              <p className="linkedinTxt">Urszula Maria Postołowicz</p>
            </div>
            <div className="github contactTile">
              <h4 className="githubTitle">GitHub</h4>
              <div className="icon">
                <FaGithubSquare />
              </div>
              <p className="githubTxt">um-postolowicz</p>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Contact;
