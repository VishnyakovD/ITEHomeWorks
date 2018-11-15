
import React, { Component } from 'react';
import List from '../list'

import { connect } from 'react-redux';
import  myAction  from "../../actions/myaction";

import {REQ_POSTS} from "../../constants"

class UserPostsPage extends Component{

  componentDidMount(){
    let{userid}=this.props.match.params
    let {getPosts}= this.props;
    getPosts(userid);
   
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
    getPosts:(id)=>{
      //dispatch(myAction.getPosts())
      dispatch(myAction.getRequestDATA(`http://jsonplaceholder.typicode.com/posts?userId=${id}`))
    }
  }
};

const ConnectedUserPostsPage=connect(mapStateToProps, mapDispatchToProps)(UserPostsPage);
export default ConnectedUserPostsPage;
