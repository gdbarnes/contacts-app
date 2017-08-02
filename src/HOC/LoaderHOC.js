import React, { Component } from "react";
import "../styles/LoaderHOC.css";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return this.props.contacts.length === 0
        ? <div className="loader" />
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoaderHOC;
