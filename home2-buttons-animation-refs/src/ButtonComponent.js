import React, { Component } from "react";
import PropTypes from "prop-types";

class ButtonComponent extends Component {
  clickButton = e => {
    //e.target.style.background = "blue";
    //e.target.className += " " + this.props.animateClass;

    let { animateClass } = this.props;

    if (this.buttonRef.className === undefined) {
      this.buttonRef.className = "";
    }

    if (this.buttonRef.className.indexOf(animateClass) >= 0) {
      this.buttonRef.className.replace(` ${animateClass}`, "");
    } else {
      this.buttonRef.className += ` ${animateClass}`;
    }

    console.log(this.buttonRef.className);

    setTimeout(() => {
      this.buttonRef.className = "";
    }, 3000);
  };

  render() {
    let { text } = this.props;
    return (
      <button onClick={this.clickButton} ref={node => (this.buttonRef = node)}>
        {text}
      </button>
    );
  }
}

ButtonComponent.defaultProps = {
  text: "Go Go Go"
};

ButtonComponent.propTypes = {
  //event: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ButtonComponent;
