import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Image extends Component {

  render() {
    const {id, src, alt} = this.props
    //console.log(this.props);
    //console.log(id, src, alt)
    return (
      <div className="u-pull-left" style={divStyle} data-id={`${id}`}>
        <img 
          src={`${src}`} 
          alt={`${alt}`} 
          onClick={this.props.randomizeImages.bind(this, this.props)} 
        />
      </div>
    );
  }
}


Image.propType = {
    image: PropTypes.object.isRequired
};

const divStyle = {
    padding: "15px"
}

export default Image;