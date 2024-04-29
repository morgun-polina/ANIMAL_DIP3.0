import React from 'react'
import Animal from './Animal';


const showAnimals= (props) =>{
    let summa = 0;
    props.animals.forEach(el => {
      summa += Number.parseFloat(el.price);
    });
    return(
      <div>
      
        {props.animals.map(el => ( 
          <Animal onDelete={props.onDelete} key={el.id} item = {el}/>
        ))}
       
      </div>
    )
  }
  
  const showNothing = () => {
    return(
      <div className='empty'>
        <h2>Нет избранного</h2>
      </div>
    )
  }

function Favourites(props) {
  return (
    <div className='animal-page'>
    {props.animals.length > 0 ?
    showAnimals(props) : showNothing()}
  </div>
  )
}

export default Favourites