import React, { Component } from 'react';
import Navbar from './components/Navbar/Index';
import Container from './components/Container/Index'
import Images from './components/ImageCards/Index';
//import Footer from './components/Navbar/index';
import './App.css';
import stewieImages from './stewieImages.json';

export class App extends Component {
  state = {
    stewieImages,
    count: 0,
    userGuesses: [],
    score: 0,
    topScore: 0
  }

  //game logic
  playGame = (data) => {
    console.log(data.id);
    this.state.userGuesses.push(data.id);
    this.setState({
      count: this.state.count + 1,
      //userGuesses: this.state.userGuesses.push(data.id),
      score: this.state.score + 1,
      topScore: this.state.topScore + 1
    }, function () {
      console.log(this.state);
    })
  }

  //randomize images in state when user clicks
  randomizeImages = () => {
    this.setState(
      this.state.stewieImages.sort(() => Math.random() - 0.5)
    )
  }

  render() {
    return (
      <div>
        <Navbar
          updateScore={this.updateScore}
        />
          <Container>
          <Images
            images={this.state.stewieImages}
            playGame={this.playGame}
          />
          </Container>
      </div>
    )
  }
}

export default App
