import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import AlbumProducts from './AlbumProducts';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={`/`} component={LoginForm}/>
      <Route path='/products' component={AlbumProducts}/>
    </Switch>
  </main>
);

export default Main;
