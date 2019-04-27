import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Image extends Component {
    render() {
        return (
            <div>
                <p>{this.props.image}</p>
            </div>
        );
    }
}


// Images.propType = {
//     image: PropTypes.object.isRequired
// };


export default Image;