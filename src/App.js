import React, { Component } from 'react';
import Navbar from './components/Navbar/Index';
import Container from './components/Container/Index'
import Images from './components/ImageCards/Index';
//import Footer from './components/Navbar/index';
import './App.css';
import stewieImages from './stewieImages.json';

export class App extends Component {
  state = {
    stewieImages
  }

  //randomize images in state when user clicks
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
          <Container>
          <Images
            images={this.state.stewieImages}
            randomizeImages={this.randomizeImages}
          />
          </Container>
      </div>
    )
  }
}

export default App
