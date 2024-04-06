import React, { Component } from 'react'
import Item from "./item"

export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/> /*передаетсы текущий элемент, с которым сейчас взаимодействуем*/

        ))}
      </main>
    )
  }
}

export default items