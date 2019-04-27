import React, { Component } from 'react'
import Image from './Image'

export class Images extends Component {
  render() {
    //console.log(this.props.images)
    return this.props.images.map((image) => <Image key={image.id} image="image"/>)
  }
}

export default Images


