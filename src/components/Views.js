import React, { Component } from 'react';

export class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Views: [
        {
          key: 'all',
          name: 'Всё',
        },
        {
          key: 'Млекопитающие',
          name: 'Млекопитающие',
        },
        {
          key: 'Птицы',
          name: 'Птицы',
        },
        {
          key: 'Рыбы',
          name: 'Рыбы',
        },
      ],
    };
  }

  handleClick(key) {
    this.props.chooseView(key);
  }

  render() {
    return (
      <div className='Views'>
        {this.state.Views.map(el => (
            <div key={el.key} onClick={() => this.handleClick(el.key)}>
              {el.name}
            </div>
        ))}
      </div>
    );
  }
}

export default Views;
