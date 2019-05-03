import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Image extends Component {
  render() {

    const {id, src, alt} = this.props;

    return (

        <div className="u-pull-left" style={divStyle} data-id={`${id}`}>
          <img 
            src={`${process.env.PUBLIC_URL}${src}`} 
            alt={`${alt}`}
            onClick={this.props.gameLogic.bind(this, this.props)}
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