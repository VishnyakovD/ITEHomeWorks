import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*
  Pages
*/

import MainPage from './main';
import NotFound from './common/notFound';

const Root = () => {
  return(
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route component={NotFound}/>
    </Switch>
  )
}

export default Root;
