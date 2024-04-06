// import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router';
// import {useSelector} from 'react-redux'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items"
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import Account from './components/Account';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  // const items1 = useSelector((state) => state.events)
  constructor(props){ /*вот вместо этого бд ввинтить*/    
  super(props)
    this.state = {
      events:[],
      currentItems:[],
      items: [
        {
        id: 1, 
        title: 'Animal world',
        img: 'zoo1.jpg',
        desc: 'Visit Minsk zoo to have unforgettable emotions',
        category: 'Развлечения',
        price: '20 BYN',
        },
        {
          id: 2, 
          title: 'Щелкунчик',
          img: 'nutcracker.jpg',
          desc: 'Посетити новую постановку в "Большом театре"',
          category: 'Театр',
          price: 'от 20 BYN'
          },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items; //внцтрь currentItems при загрузке сайта изначально помещаем все элементы, которые находятся в массиве items
    this.addToEvents = this.addToEvents.bind(this); //для взаимодействия с состояниями
    this.deleteEvent = this.deleteEvent.bind(this); //для взаимодействия с состояниями
    this.chooseCategory = this.chooseCategory.bind(this); //для взаимодействия с состояниями
    this.onShowItem = this.onShowItem.bind(this); //для взаимодействия с состояниями


  }
  render(){
    return (
      <div className="wrapper">
        <Header events={this.state.events} onDelete={this.deleteEvent}/>

    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/>} />

        <Route path="/main" element={<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents} />} />
        <Route path="/one" element={<Account />} />
        <Route path="/two" element={<Account />} />
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    {/* </BrowserRouter> */}

        <Categories chooseCategory={this.chooseCategory}/>
        {/* <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToEvents}/> */}

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToEvents} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem}) /*ставим противоположнео значение*/
  }

  chooseCategory(category){
if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return 
}

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteEvent(id){
    this.setState({events: this.state.events.filter(el => el.id !== id)})
  }

  addToEvents(item){
    let isInArray = false;
    this.state.events.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    })
    if(!isInArray){
          this.setState({events: [...this.state.events, item] }) //добавление к текущему элементу элемента, который передастся в качестве параметра

    }
  }
}

export default App;
