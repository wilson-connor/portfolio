import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const SideMenu = ({ closeMobileMenu, handleClick, clicked }) => {
  const isClickedItem = clicked ? 'item active' : 'item';

  return (
    <ul className="menu">
      <li className="logo">
        <Link to="/">Connor Wilson</Link>
      </li>
      <li className={isClickedItem} onClick={closeMobileMenu}>
        <Link to="/">About</Link>
      </li>
      <li className={isClickedItem} onClick={closeMobileMenu}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={isClickedItem} onClick={closeMobileMenu}>
        <Link to="/projects">Projects</Link>
      </li>
      <li className={isClickedItem} onClick={closeMobileMenu}>
        <Link to="/music">Music</Link>
      </li>
      <li className="toggle" onClick={handleClick}>
        {clicked ? (
          <FaTimes size={50} color={'white'} />
        ) : (
          <FaBars size={40} color={'white'} />
        )}
      </li>
    </ul>
  );
};

export default SideMenu;
