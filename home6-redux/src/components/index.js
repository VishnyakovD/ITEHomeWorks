import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HeadComponent from './head/'
import PostPage from './post/'
import UserPostsPage from './user-posts/'

/*
  Pages
*/

import MainPage from './main';
import NotFound from './common/notFound';

const Root = () => {
  return(
    <>
      <HeadComponent />
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/post/:postid" exact component={PostPage}/>
        <Route path="/user-posts/:userid" exact component={UserPostsPage}/>
        <Route component={NotFound}/>
      </Switch>
    </>
  )
}

export default Root;
