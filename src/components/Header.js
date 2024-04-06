import React, { useState } from 'react'
import {FaHeart} from "react-icons/fa" //change for new icon
import { Link } from 'react-router-dom';

import Event from './Event';

// const showEvents = (props) =>{
//   let summa = 0;
//   props.events.forEach(el => {
//     summa += Number.parseFloat(el.price);
//   });
//   return(
//     <div>
//       {/*фигурные скобки для вывода html-кода*/}
//       {props.events.map(el => ( 
//         <Event onDelete={props.onDelete} key={el.id} item = {el}/>
//       ))}
//       {/* ?  #6 8:38 format - для корректного отображения суммы*/}
//       <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}</p> 
//     </div>
//   )
// }

// const showNothing = () => {
//   return(
//     <div className='empty'>
//       <h2>Нет избранного</h2>
//     </div>
//   )
// }

export default function Header(props) {
  // let [eventOpen, setEventOpen] = useState(false); //изначально не активно

  return (
    <header>
        <div>
            <Link to='main' className='logo'>Events</Link>
            
            <ul className='nav'>
              <Link to='one' className='nav-li'>Кино</Link>
              <Link to='two' className='nav-li'>Фестивали</Link>  
              <Link to='Account' className='nav-li'>Кабинет пользователя</Link>
            </ul>
            <Link to='favourites'><FaHeart  className='event-button'/> </Link>

            {/* <FaHeart onClick={() => setEventOpen(eventOpen = !eventOpen)} className={`event-button ${eventOpen && 'active'}`}/> */}
            {/* change icon, объявляем анонимную функцию при нажатии, значние eventOpen меняется на противоложное */}

            {/* {eventOpen && (
              <div className='event-page'>
                {props.events.length > 0 ?
                showEvents(props) : showNothing()}
              </div>
            )} */}
        </div>
        <div className='presentation'></div>

    </header>
  )


}

