import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import zubrImg from '../img/zubr.png';

export default function AboutUs() {
  const [bookImage, setBookImage] = useState('../public/img/blog_photoresize.jpg'); 
  const [showZubr, setShowZubr] = useState(false); 

  // рандом позиция зубра
  const getRandomPosition = () => {
    const randX = Math.floor(Math.random() * 500); 
    const randY = Math.floor(Math.random() * 500); // чтоб влазил
    return { top: randY, left: randX };
  };

  
  const showZubrImage = () => {
    setShowZubr(true);
    setTimeout(() => setShowZubr(false), 3000); 
  };

  useEffect(() => {
    const zubrTimer = setInterval(showZubrImage, 5000); 
    return () => clearInterval(zubrTimer);
  }, []);

  return (
    <div>
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
          <ul className="nav">
            <Link to="/login" className="nav-li">
              Авторизация
            </Link>
          </ul>
         
        </div>
      </header>
 
      <article className="main-article back">
        <div className="main-article__content" style={{ overflow: 'hidden' }}>
          <div className="main-article__animals">
            <h2 className="main-article__header_fix">О нас</h2>
            <div className="main-article__animal">
              
              {showZubr && (
                <img
                  src={zubrImg}
                  alt="Зубр"
                  className="animal-img zubr-img"
                  style={{ position: 'absolute', ...getRandomPosition() }}
                />
              )}
            </div>
          </div>

          <p className="main-article__paragraph_fix">
            "Краснакнижные животные" – ваш источник знаний о редких и исчезающих видов животных Республики Беларусь. Веб-приложение предоставляет возможность погрузиться в мир биологического разнообразия, узнать об уникальных животных и их окружающей среде, а также о том, какие угрозы им грозят. Наша миссия – повышение осведомленности и вовлечение общества в действия по сохранению уязвимых видов для будущих поколений.
          </p>
          <h2 className="main-article__header_marg">Красная книга</h2>
      
          <div className="book"></div>
          <p className="main-article__paragraph_n">
            Красная книга — это документ, содержащий список редких животных и растений. Ориентируясь на него, государства принимают меры по охране популяций и увеличению их численности: создают заповедники, ограничивают или запрещают охоту, разводят животных и высаживают растения в подходящих для них условиях.
          </p>
          <h2 className="main-article__header_fix">История возникновения</h2>
          <p className="main-article__paragraph_fix ">
            В 1948 году группа ученых и общественные организации разных стран, объединившись, создали Международный союз охраны природы и природных ресурсов (МСОП), задачей которого стало содействие сохранению и разумному использованию обширных природных богатств. 
          </p>
          <p className="main-article__paragraph_fix ">
            Все страницы ККн были окрашены в красный цвет, отсюда название книги, а т.к. красный цвет символизирует опасность, ученые составители пытались привлечь внимание общественности к той угрозе, которая нависла над живым населением Земли. С того времени Красные книги стали выходить во многих странах мира, но красным в них остался лишь переплет.
          </p>
          <p className="main-article__paragraph_fix ">
            В Беларуси первая Красная книга вышла в 1981 году (было включено 80 видов животных и 85 видов растений). Второе издание Красной книги вышло в 1993 году.
          </p>
          <p className="main-article__paragraph_fix ">
            Первый том третьей Красной книги вышел в 2004 году (животные - 191 вид); второй том - в 2005 году (растения – 313 видов).
          </p>
        </div>
      </article>
    </div>
  );
}
