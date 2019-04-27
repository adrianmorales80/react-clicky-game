import React, { Component } from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

export class Images extends Component {
  render() {
    //console.log(this.props.images)
    return this.props.images.map((image) => (
        <Image 
          key={image.id} 
          id={image.id} 
          src={image.url} 
          alt={image.alt}
          randomizeImages={this.props.randomizeImages}
        />
    ))
  }
}

Images.proptype = {
    images: PropTypes.array.isRequired
}

export default Images


