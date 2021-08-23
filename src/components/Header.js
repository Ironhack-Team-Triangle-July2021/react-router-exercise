import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" exact>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
