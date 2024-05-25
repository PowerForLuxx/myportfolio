import React from 'react';
import './Contact.css';
import fbIcon from '../img/fb.png';
import githubIcon from '../img/github.png';
import instagramIcon from '../img/instagram.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="content-wrapper">
        <h1>Контакты</h1>
        <p>Здесь вы можете написать мне или найти меня в социальных сетях:</p>
        <ul>
          <li>Email: ajdynn99@gmail.com</li>
          <p><li>Телефон: +7077777777</li></p>
        </ul>
        <div className="icons-container">
          <a href="https://web.facebook.com/profile.php?id=100034862615456&locale=ru_RU" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="https://github.com/PowerForLuxx" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/aidyngl/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
