import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SendMessage from './SendMessage';

const Contact = () => {
  return (
    <div className="content-contact">
      <div className="content-item">
        <h1 className="content-header">I'm looking for new opportunities!</h1>
      </div>
      <p className="content-text">Connect with me:</p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/wilson-connor/" target="_blank">
          <FaLinkedin size={40} />
        </a>
        <a
          className="icon-link"
          href="https://github.com/wilson-connor"
          target="_blank"
        >
          <FaGithub size={40} />
        </a>
        <a href="mailto:wilso.conn@gmail.com">
          <p className="content-text email">wilso.conn@gmail.com</p>
        </a>
      </div>
      <SendMessage />
    </div>
  );
};

export default Contact;
