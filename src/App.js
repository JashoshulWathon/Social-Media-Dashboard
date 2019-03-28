import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import './App.css';
import UserPage from './UserPage';
import PostPage from './PostPage';
import AlbumPage from './AlbumPage';
import MyProvider from './MyProvider';

const App = () => (
  <MyProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/userPage" component={UserPage} />
      <Route exact path="/postPage" component={PostPage} />
      <Route exact path="/albumPage" component={AlbumPage} />
    </Switch>
  </MyProvider>
);

export default App;
