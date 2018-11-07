import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TogglerComponent extends Component {
  render(){
    let { name, text, children, activeToggler, changeState } = this.props;
    return(
      <div className="toggler">
        {text}
        <div>
          {
            React.Children.map(
              children,
              (ChildrenItem) => { 
                if(ChildrenItem.props.text === activeToggler){
                    return React.cloneElement(ChildrenItem, {
                      text: ChildrenItem.props.text,
                      active: true,
                      changeState: changeState,
                      parent: name
                    })
                } else {
                  return React.cloneElement(ChildrenItem, {
                    text: ChildrenItem.props.text,
                    changeState: changeState,
                    parent: name
                  })
                }
              }
            )
            }
        </div>
      </div>
    );
  }
}

export const TogglerComponentItem = ({parent, text, active, changeState}) => {
  return(
    <div className={
      active === true ?
        "toggler-item active":
        "toggler-item"
      }
      data-value={text}
      data-parent={parent}
      onClick={
        changeState !== undefined ?
          changeState :
          null
      }
      >
      {text}
    </div>
  );
};


TogglerComponent.propTypes = {
    children:PropTypes.arrayOf(PropTypes.element), 
    text: PropTypes.string.isRequired,
    activeState:PropTypes.string,
    changeState: PropTypes.func.isRequired,  
  };