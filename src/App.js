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
    userGuesses: [],
    score: 0,
    topScore: 0,
    continuePlaying: true
  }

  //updates user guesses, score and top score
  gameLogic = (data) => {
    //save user guesses
    let userGuesses = this.state.userGuesses;
    userGuesses.push(data.id);
    
    //randomize images
    this.state.stewieImages.sort(() => Math.random() - 0.5);
    
    //evaluate if user guess is incorrect by sorting, looping and updating boolean
    userGuesses.sort((a,b )=> {return a-b})
    for (let i = 0; i < this.state.userGuesses.length; i++) {
      if (data.id === this.state.userGuesses[i] && data.id === this.state.userGuesses[i+1]) {
        return this.setState({...this.state.continuePlaying, continuePlaying: false}, function () {
          this.setState({...this.state.score, score: 0,
            ...this.state.topScore, topscore: this.state.topScore,
            ...this.state.userGuesses, userGuesses: [],
            ...this.state.continuePlaying, continuePlaying: true
          });
          this.forceUpdate()
        });
      }
    }
    
    //keep playing if the user is correct
    if (this.state.continuePlaying) {
      this.setState({
        ...this.state.score, score: this.state.score + 1
      })
    } 
    if (this.state.score > this.state.topScore) {
      this.setState({...this.state.topScore, topscore: this.state.score})
    }
  }



  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
          <Container>
          <Images
            images={this.state.stewieImages}
            gameLogic={this.gameLogic}
            handler = {this.handler}
          />
          </Container>
      </div>
    )
  }
}

export default App
