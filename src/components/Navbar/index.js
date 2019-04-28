import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><h4><strong>Clicky Game</strong></h4></li>
          <li><h4><strong>Click an image to begin</strong></h4></li>
          <li><h4><strong>Score: 0 <br/>TopScore: 0</strong></h4></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar

