import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div>
        <h2>
          { this.props.headline }
        </h2>
      </div>
    );
  }
}

export default Title;
