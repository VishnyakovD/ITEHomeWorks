import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import  myAction  from "../../actions/myaction";

import {REQ_POST} from "../../constants"

class PostPage extends Component{
    componentDidMount(){
      let {getPost}= this.props;
      let {postid}= this.props.match.params;
      getPost(postid);
     
    }


  render(){
    let { post, loading } = this.props; 
    return(
      loading===true?
      (<h3>Post Is Loading...</h3>):
      (<>
           <h2>{post.data.title}</h2>
           <div>{post.data.body}</div>
           <div><Link to={`/user-posts/${post.data.userId}`}>All User Posts</Link></div>
      </>)
    )
  }
}


//export default PostPage;
const mapStateToProp=(state, ownProps)=>{
  return {
    post:state.post
  };
};

const mapDispatchToProp=(dispatch, ownProps)=>{
  dispatch({
    type:REQ_POST
  })
  return {
    getPost:(id)=>{
      //dispatch(myAction.getPosts())
      dispatch(myAction.getRequestDATA1(`http://jsonplaceholder.typicode.com/posts/${id}/`))
    }
  }
};

const ConnectedPostPage=connect(mapStateToProp, mapDispatchToProp)(PostPage);
export default ConnectedPostPage;
