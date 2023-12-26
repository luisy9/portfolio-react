import { useState } from 'react';
import buger from '../../../assets/burger-menu.svg';
import close from '../../../assets/close.svg';
import logo from '../../../assets/logo.png';
import './index.css';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='text-logo'>
        <img src={logo} alt='logo' className='logo' />
        LuisDev
      </div>
      <nav className={`nav-bar ${!isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href='#home' className='active'>
              About me
            </a>
          </li>
          <li>
            <a href='#About' className='active'>
              Skills
            </a>
          </li>
          <li>
            <a href='#Projects' className='active'>
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <a className='cta' href='#'>
        <button>Contactame</button>
      </a>
      {isOpen ? (
        <>
          <img
            src={buger}
            alt='burger'
            className='burger-menu'
            onClick={toggleMenu}
          />
        </>
      ) : (
        <>
          <img
            src={close}
            alt='burger'
            className='burger-menu'
            onClick={toggleMenu}
          />
        </>
      )}
    </header>
  );
};
