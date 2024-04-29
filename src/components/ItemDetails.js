import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const ItemDetails = ({ items }) => {
  const { id } = useParams(); // Получаем идентификатор элемента из URL
  const item = items.find(item => item.id === parseInt(id)); // Находим  по идентификатору

  if (!item) return <div>Элемент не найден</div>; // Если нет то понятно

  return (
    <div>
      <Header /> {}
      <div className="item-details">
        <img src={`/img/${item.img}`} alt={item.title} /> 
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}</b>
      </div>
    </div>
  );
}

export default ItemDetails;
