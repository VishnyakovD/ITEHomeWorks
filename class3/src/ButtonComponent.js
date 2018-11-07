import React, { Component } from "react";
import PropTypes from "prop-types";

export class ButtonComponent extends Component {
  render() {
    let { text, event } = this.props;
    return <button onClick={event}>{text}</button>;
  }
}

ButtonComponent.defaultProps = {
  text: "Go Go Go"
};

ButtonComponent.propTypes = {
  event: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ButtonComponent;
