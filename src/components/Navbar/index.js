import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    //const [score, topScore] = this.props;
    //console.log(this.props)
    return (
      <nav>
        <ul>
          <li><h4><strong>Clicky Game</strong></h4></li>
          <li><h4><strong>Click an image to begin</strong></h4></li>
          <li >
            <h4>
              <strong>
                <span onChange = {this.props.handler}>Score: {this.props.score}</span><br/><span>TopScore: {this.props.topScore}</span>
              </strong>
            </h4>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar

