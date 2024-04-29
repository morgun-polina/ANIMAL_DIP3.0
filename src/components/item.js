import React, { Component } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b> 
        {}
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><FaHeart className='t' /></div>
        <Link to={`/item/${this.props.item.id}`} className='details-button'>
            Подробнее
       </Link>

      </div>
    )
  }
}

export default Item;
