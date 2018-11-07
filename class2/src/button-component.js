import React from "react";

const ButtonComponent = ({ styles, event, text, className }) => {
  return (
    <button className={className} style={styles} onClick={event}>
      {text}
    </button>
  );
};

ButtonComponent.defaultProps = {
  styles: {
    //background: 'yellow',
    //color:'red'
  },
  event: () => {
    alert("this is default event");
  },
  text: "Button default"
};

export default ButtonComponent;
