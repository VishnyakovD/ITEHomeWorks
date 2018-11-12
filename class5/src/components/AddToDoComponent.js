import React, { Component } from "react";
//import PropTypes from "prop-types";
import Button from "./ButtonComponent";
import Input from "./InputComponent";

import { connect } from "react-redux";
import { CHANGE_TODO, ADD_TODO } from "../constants";

class AddToDoComponent extends Component {
  state = {
    text: ""
  };
  setText = e => {
    this.setState({ text: e.target.value });
  };

  addToDo = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="add-todo-block">
        <Input type="text" placeholder="Enter todo..." event={this.setText} value={this.state.text} />
        <Button event={this.addToDo} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: text => {
    if(text==="") return

    dispatch({
      type: ADD_TODO,
      text: text
    });
  }
  ,
  changeToDo: id =>{
    dispatch({
      type: CHANGE_TODO,
      id: id
    });
  }
});

const connectedAddComp = connect(
  null,
  mapDispatchToProps
)(AddToDoComponent);

export default connectedAddComp;

