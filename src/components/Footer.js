import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoLinkedin } from "react-icons/io";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://github.com/jaya4ever"
          target="_blank"
          rel="noopener noreferrer"
        >
          < AiFillGithub />
        </a>

        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/jaya-singh-9aa606133/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>

      </p>
    </footer>
  );
}

export default Footer;