import React, { Component } from 'react'
//CSS
import './App.css';
import Navbar from './components/Navbar/index';
import Images from './components/ImageCards/index';
//import Footer from './components/Navbar/index';
//Images
import stewieCart from './components/Assets/stewie-cart.jpg';
import stewieDance from './components/Assets/stewie-dance.jpg';
import stewieDiaper from './components/Assets/stewie-diaper.jpg';
import stewieDrink from './components/Assets/stewie-drink.jpg';
import stewieDriving from './components/Assets/stewie-driving.jpg';
import stewieEvil from './components/Assets/stewie-evil.jpg';
import stewieExcited from './components/Assets/stewie-excited.jpg';
import stewieLaser from './components/Assets/stewie-laser.jpg';

export class App extends Component {
  state = {
    images: [
      {
        id: 1,
        url: stewieCart,
        alt: "stewie in cart"
      },
      {
        id: 2,
        url: stewieDance,
        alt: "stewie dancing"
      },
      {
        id: 3,
        url: stewieDiaper,
        alt: "stewie wearing diapers"
      },
      {
        id: 4,
        url: stewieDrink,
        alt: "stewie in drinking alcohol"
      },
      {
        id: 5,
        url: stewieDriving,
        alt: "stewie driving"
      },
      {
        id: 6,
        url: stewieExcited,
        alt: "excited stewie"
      },
      {
        id: 7,
        url: stewieEvil,
        alt: "evil stewie"
      },
      {
        id: 8,
        url: stewieLaser,
        alt: "stewie with laser gun"
      }
    ]
  }
  //randomize images when user clicks
  randomizeImages = (data) => {
    console.log(`Hello ${data.id}`);
    //const totalItems = this.state.images.length;
    this.setState({
      images: [
        ...this.state.images.sort(() => Math.random() - 0.5)
      ]
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Images
            images={this.state.images}
            randomizeImages={this.randomizeImages}
          />
        </div>
      </div>
    )
  }
}

export default App
