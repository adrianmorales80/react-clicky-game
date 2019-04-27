import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import Images from './components/Images';
//import Image from './components/Image';
//import Footer from './components/layout/Footer';
import stewieCart from './components/assets/stewie-cart.jpg';
import stewieDance from './components/assets/stewie-dance.jpg';
import stewieDiaper from './components/assets/stewie-diaper.jpg';
import stewieDrink from './components/assets/stewie-drink.jpg';
import './appNormalize.css';
import './appSkeleton.css';

export class App extends Component {
  state = {
    images: [
      {
        id: 1,
        url: stewieCart
      },
      {
        id: 2,
        url: stewieDance
      },
      {
        id: 3,
        url: stewieDiaper
      },
      {
        id: 4,
        url: stewieDrink
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Images 
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App
