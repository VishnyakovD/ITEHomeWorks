import React, { Component } from "react";
import PropTypes from "prop-types";

export class InputComponent extends Component {
  render() {
    let { type, placeholder, value, event} = this.props;
    return (
        <input type={type} placeholder={placeholder} onChange={event} value={value} />
    );
  }
}

InputComponent.defaultProps = {
  type: "text",
  placeholder:"",
  //value:""
};

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any,
  type: PropTypes.oneOf(["text", "password", "number"]).isRequired
};

export default InputComponent;
