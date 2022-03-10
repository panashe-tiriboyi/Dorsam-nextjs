import React, { Component } from "react";

class FooterContent extends Component {
  state = {};
  render() {
    return (
      <div className="text-light col-md-2 mb-3">
        <h6 className="text-uppercase font-weight-bold">
          <button type="button" className="btn btn-primary" href="#!">
            {this.props.btnname}
          </button>
        </h6>
      </div>
    );
  }
}

export default FooterContent;
