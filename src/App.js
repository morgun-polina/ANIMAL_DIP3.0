import React, { Component, Fragment, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Добавляем Navigate
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Views from './components/Views';
import ShowFullItem from './components/ShowFullItem';
import Account from './components/Account';
import ErrorPage from './components/ErrorPage';
import Favourites from './components/Favourites';
import ItemDetails from './components/ItemDetails';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AboutUs from './components/AboutUs';

function SmoothScroll({ children }) {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const smoothScrollAnchors = document.querySelectorAll('a[href^="#"]');
    smoothScrollAnchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          gsap.to(window, { scrollTo: { y: targetElement, autoKill: false }, duration: 0.5 });
        }
      });
    });
  }, [location]);

  return <>{children}</>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Зубр',
          img: 'zubr.jpg',
          desc: 'Вид парнокопытных, последний представитель диких быков в Европе',
          view: 'Млекопитающие',
          
        },
        {
          id: 2,
          title: 'Черный аист',
          img: 'aist.jpg',
          desc: 'Птица из семейства аистовых, которая обитает в лесной зоне Евразии, стараясь избегать людей"',
          view: 'Птицы',
         
        },
        {
          id: 3,
          title: 'Обыкновенный усач',
          img: 'usach.jpg',
          desc: 'Пресноводная, речная,  достигающая в длину 85—90 см"',
          view: 'Рыбы',
         
        },
        {
          id: 4,
          title: 'Барсук',
          img: 'bars.jpg',
          desc: 'Хищник семейства куницевых, типичный норник. Обитает в лесах и лесостепях"',
          view: 'Млекопитающие',
         
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.addToAnimals = this.addToAnimals.bind(this);
    this.deleteAnimal = this.deleteAnimal.bind(this);
    this.chooseView = this.chooseView.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
  }

  render() {
    return (
      <SmoothScroll>
        <div className="wrapper">
          <Routes>
            {/* Используем Navigate для переадресации */}
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={(
              <Fragment>
                <Header onSearch={this.handleSearch} />
                <Views chooseView={this.chooseView} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToAnimals} />
              </Fragment>
            )} />
            <Route path="/favourites" element={(
              <Fragment>
                <Header onSearch={this.handleSearch} />
                <Favourites animals={this.state.animals} onDelete={this.deleteAnimal} />
              </Fragment>
            )} />
            <Route path="/about" element={< AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/item/:id" element={<ItemDetails items={this.state.items} />} />
          </Routes>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToAnimals} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Footer />
        </div>
      </SmoothScroll>
    );
  }

  handleSearch = (animal) => {
    const searchQuery = animal.target.value;
    const filteredItems = this.state.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ currentItems: filteredItems });
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseView(view) {
    if (view === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.view === view),
    });
  }

  deleteAnimal(id) {
    this.setState({ animals: this.state.animals.filter(el => el.id !== id) });
  }

  addToAnimals(item) {
    let isInArray = false;
    this.state.animals.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ animals: [...this.state.animals, item] });
    }
  }
}

export default App;
