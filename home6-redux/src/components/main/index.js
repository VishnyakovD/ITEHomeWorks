import React, { Component } from 'react';
import List from '../list'

import { connect } from 'react-redux';
import  myAction  from "../../actions/myaction";

import {REQ_POSTS} from "../../constants"

class MainPage extends Component{

  componentDidMount(){
    let {getPosts}= this.props;
    getPosts();
   
  }

  render(){
    let { posts, loading} = this.props; 
    return(
      <>
        <List posts={posts} loading={loading} />
      </>
    )
  }
}


//export default MainPage;



const mapStateToProps=(state, ownProps)=>{
  return {
    posts:state.posts
  };
};

const mapDispatchToProps=(dispatch, ownProps)=>{
  dispatch({
    type:REQ_POSTS
  })
  return {
    getPosts:()=>{
      //dispatch(myAction.getPosts())
      dispatch(myAction.getRequestDATA("https://jsonplaceholder.typicode.com/posts/"))
    }
  }
};

const ConnectedMainPage=connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default ConnectedMainPage;