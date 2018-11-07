import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class InputComponent extends Component {
  render(){
    let { name, text, type, placeholder, value, onChangeHandler } = this.props;
    return(
        <div className="input-block">
        <div>{text}</div>
            <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            />
      </div>
    );
  }
}

InputComponent.defaultProps = {
  type:'text'
}


InputComponent.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.any,
    type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
  };

  export default InputComponent;