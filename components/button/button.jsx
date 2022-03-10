import React, { Component } from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          style={this.props.style}
          className={this.props.btnStyle}
          onClick={this.props.onAction}
        >
          {this.props.btnname}
        </button>
      </div>
    );
  }
}

export default Button;
