import React, { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onSearch }) {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const init = () => {
      const animalsToggle = document.querySelector('.animals-toggle');
      const animalsSubmenu = document.querySelector('.animals-submenu');

      if (animalsToggle && animalsSubmenu) {
        const handleClick = (e) => {
          e.preventDefault();
          animalsSubmenu.classList.toggle('show');
        };

        animalsToggle.addEventListener('click', handleClick);

        return () => {
          animalsToggle.removeEventListener('click', handleClick);
        };
      }
    };
    document.addEventListener('DOMContentLoaded', init);

    return () => {
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);

  const isMainPage = location.pathname === '/main';

  return (
    <header>
      <div className="header">
          <Link to="/main" className="logo">
            Краснокнижные животные
          </Link>
          <Link to="/about" className="nav-li"> 
            О нас
          </Link>
          <Link to="/favourites">
           
            Избранное
          </Link>
          {/* Отображаем d "search-bar" только на странице /main */}
          {isMainPage && (
            <div className="search-bar">
              <input type="text" placeholder="Поиск..." onChange={onSearch} />
            </div>
          )}
          <ul className="nav">
            <Link to="/login" className="nav-li">
              Авторизация
            </Link>
          </ul>
      </div>
      {/* Отображаем "presentation" только на странице /main */}
      {isMainPage && (
        <div className="presentation">
          <div class="wrapper">
        <div class="content">
            <header class="headers">
                <div class="layers">
                    <div class="layer__header">
                        <div class="layers__caption">Web-приложение </div>
                        <div class="layers__title">Краснакнижные животные</div>
                    </div>
                    <div class="layer layers__base" ></div>
                    <div class="layer layers__middle"></div>
                    <div class="layer layers__front" ></div>
                </div>
            </header>
        
           

        </div>
    </div>
        </div>
      )}
    </header>
  );
}
