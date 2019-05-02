import React, { Component } from 'react';
import Navbar from './components/Navbar/Index';
import Container from './components/Container/Index'
import Images from './components/ImageCards/Index';
import Footer from './components/Footer/Index';
import './App.css';
import stewieImages from './stewieImages.json';

export class App extends Component {
  state = {
    stewieImages,
    userGuesses: [],
    score: 0,
    topScores: [0],
    continuePlaying: true
  }

  //updates user guesses, score and top score; triggered by click event in Image.js component
  gameLogic = (data) => {
    //save user guesses
    let userGuesses = this.state.userGuesses;
    userGuesses.push(data.id);

    //randomize images
    this.state.stewieImages.sort(() => Math.random() - 0.5);

    //evaluate if user guess is incorrect by sorting, looping and updating the state
    userGuesses.sort((a,b )=> {return a-b})
    for (let i = 0; i < this.state.userGuesses.length; i++) {
      //if block will execute if user clicked the same image twice
      if (data.id === this.state.userGuesses[i] && data.id === this.state.userGuesses[i+1]) {
        //save the highest score so far
        let topScoresArr = this.state.topScores;
        topScoresArr.push(this.state.score);
        //sort the scores and grab the first index (e.g. highest value)
        topScoresArr.sort((a,b )=> {return b-a})
        //reset values and force a re-render
        return this.setState({...this.state.continuePlaying, continuePlaying: false}, function () {
          this.setState({...this.state.score, score: 0,
            ...this.state.topScores, topscores: this.state.topScores[0],
            ...this.state.userGuesses, userGuesses: [],
            ...this.state.continuePlaying, continuePlaying: true
          });
          this.forceUpdate()
        });
      }
    }

    //keep playing if the user is correct
    if (this.state.continuePlaying) {
      //grab the latest top score by pushing score and sorting the array in desc. order
      let topScoresArr = this.state.topScores;
      topScoresArr.push(this.state.score);
      topScoresArr.sort((a,b )=> {return b-a});
      //update scores
      this.setState({
        ...this.state.score, score: this.state.score + 1,
        ...this.state.topScores, topScore: this.state.topScores[0]
      })
    } 
  }



  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScores={this.state.topScores}
        />
          <Container>
          <div>
            <h4><strong>Instructions:</strong> Get as many points as possible but do not click the same image twice!</h4>
          </div>
          <Images
            images={this.state.stewieImages}
            gameLogic={this.gameLogic}
            handler = {this.handler}
          />
          </Container>
          <Footer/>
      </div>
    )
  }
}

export default App
