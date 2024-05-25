import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/projects">Проекты</Link>
        </li>
        <li>
          <Link to="/add-project">Добавить проект</Link> 
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;