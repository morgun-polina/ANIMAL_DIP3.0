import React, { Component } from 'react'
import Item from "./Item"
import Views from './Views';




export class items extends Component {
  render() {
    
    return (
      <div>
        {}

        <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/> /*передаетсы текущий элемент, с которым сейчас взаимодействуем*/

        ))}
        </main>
      </div>
    )
  }
}

export default items