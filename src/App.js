import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import Images from './components/Images';
//import Image from './components/Image';
//import Footer from './components/layout/Footer';
import stewieCart from './components/assets/stewie-cart.jpg';
import stewieDance from './components/assets/stewie-dance.jpg';
import stewieDiaper from './components/assets/stewie-diaper.jpg';
import stewieDrink from './components/assets/stewie-drink.jpg';
import stewieDriving from './components/assets/stewie-driving.jpg';
import stewieEvil from './components/assets/stewie-evil.jpg';
import stewieExcited from './components/assets/stewie-excited.jpg';
import stewieLaser from './components/assets/stewie-laser.jpg';
import './appNormalize.css';
import './appSkeleton.css';

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
