import React, { Component } from 'react';
import { Link } from "react-router-dom";



class List extends Component{
  state={
    isAll:false
  }


    isAllEvent=()=>{
      this.setState({isAll:true});
    }


  render(){
    let { posts, loading} = this.props; 
    let {isAll}=this.state;
    return(
      <div>
        {
          loading===true?
          (<h3>Posts Loading...</h3>):
          (
            <>
            {
            posts.data.map((item,index) => {
              if(isAll===true){
                return (
                  <div key={item.id}>
                    <span>{item.title}</span>
                    <Link to={`/post/${item.id}`}>Read</Link>
                  </div>
                )
              }
              else if(index<25){
                return (
                  <div key={item.id}>
                    <span>{item.title}</span>
                    <Link to={`/post/${item.id}`}>Read</Link>
                  </div>
                )
              }
           

            })
          }
          {
            isAll===false ? <h4 onClick={this.isAllEvent}>More...</h4>:null
          }
            
            </>
          )
        }
      </div>
    )
  }
}


export default List;
