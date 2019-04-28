import React, { Component } from 'react'
//CSS
import './App.css';
import Navbar from './components/Navbar/index';
import Images from './components/ImageCards/index';
//import Footer from './components/Navbar/index';
//Images
import stewieImages from './stewieImages.json'

export class App extends Component {
  state = {
    stewieImages
  }
  //randomize images when user clicks
  randomizeImages = (data) => {
    console.log(`Hello ${data.id}`);
    this.setState(
      this.state.stewieImages.sort(() => Math.random() - 0.5)
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Images
            images={this.state.stewieImages}
            randomizeImages={this.randomizeImages}
          />
        </div>
      </div>
    )
  }
}

export default App
