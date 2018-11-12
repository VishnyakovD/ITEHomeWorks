import React, { Component } from "react";
import { connect } from "react-redux";
import ListToDos from "./ListToDosComponent";
import { GET_TODOS, ADD_TODO, SET_FILTER } from "../constants";


class List extends Component {
  
  state = {
    filter: 'all'
  }


  componentDidUpdate(prevProps, prevState){
    let { getToDos } = this.props;
    if( prevProps.match.params.filter !== this.state.filter ){
      getToDos( this.state.filter );
    }
  }

  componentDidMount() {
    let { getToDos } = this.props;
    getToDos( this.state.filter );
  }

  static getDerivedStateFromProps(props, state){
    let filter = state.filter;
    if( props.match.params.filter !== state.filter){
      filter = props.match.params.filter; 
    } 
    return {
      filter
    }
  }


  render() {   
    let { filtredTodos} = this.props;
    return (
      <div>
        <h2>{this.state.filter}</h2>
        {
          <ListToDos filtredTodos={filtredTodos} />
        }
      </div>
    );
  }
}


/*
  Redux
*/

const mapStateToProps = state => {
  return { 
    filter: state.filter,
    toDosList: state.toDosList,
    filtredTodos:state.filtredTodos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

  setFilter: () => {
    let { filter } = ownProps.match.params;
    dispatch({
        type: SET_FILTER,
        filter: filter
    })
  },  

  getToDos: ( filter )=>{
    dispatch({
      type: GET_TODOS,
      filter
    })
  },

  addToDo: text => {
    dispatch({
      type: ADD_TODO,
      text:text
    });
  }
});

const ConnectedList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ConnectedList;

