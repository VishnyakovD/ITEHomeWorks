import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_TODO} from "../constants";

class ListToDosComponent extends Component {


  checkedToDo=(e)=>{
    this.props.changeToDo( e.currentTarget.dataset.id);  
    this.forceUpdate()
  }

  render() {
    let {filtredTodos} = this.props;

    return (
      <div>     
          <ul>
            {
                filtredTodos.map((item) => (
                <li className={`done-${item.isDone}`} key={item.id} data-id={item.id} onClick={this.checkedToDo}>
                    {item.text}
                </li>
            ))}
          </ul> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeToDo: id =>{
    dispatch({
      type: CHANGE_TODO,
      id: id
    });
  }
});

const connectedListToDos = connect(
  null,
  mapDispatchToProps
)(ListToDosComponent);

export default connectedListToDos;
