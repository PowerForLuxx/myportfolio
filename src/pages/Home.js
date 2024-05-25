import React from 'react';
import './Home.css'; 
import psIcon from '../img/ps.png';
import phpIcon from '../img/hph.png';
import unityIcon from '../img/un.png';
import csharpIcon from '../img/cs.png';
import jsIcon from '../img/js.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1>Всем привет!</h1>
        <h2>Меня зовут Айдын!</h2>
        <p>Мне 20, в настоящее время учусь в университете "НАО Нархоз" на 3 курсе по специальности DmD.</p>
        <p>Имею базовые знания в таких программах как <span className="skill">Adobe Photoshop</span>, <span className="skill">Blender</span>, <span className="skill">Aseprite</span>, <span className="skill">Unity</span>, <span className="skill">Sony Vegas 16</span>.</p>
        <p>Имею базовые знания <span className="skill">Js</span>, <span className="skill">Php</span>, <span className="skill">C#</span>, <span className="skill">Sql</span> и т.д.</p>
        <p>Сейчас изучаю сферу <span className="skill">GameDev</span>.</p>
        <div className="icons-container">
          <img src={psIcon} alt="Adobe Photoshop" />
          <img src={phpIcon} alt="PHP" />
          <img src={unityIcon} alt="Unity" />
          <img src={csharpIcon} alt="C#" />
          <img src={jsIcon} alt="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Home;
