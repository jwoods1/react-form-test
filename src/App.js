import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AuthorPage from './Pages/AuthorPage';
import UploadPage from './Pages/UploadPage';
import PostPage from './Pages/PostPage';

class App extends Component {
  render() {
    return (
     <Router>
      <div>
        <Route exact path="/" component={AuthorPage}/>
        <Route path="/post" component={PostPage}/>
        <Route path="/upload" component={UploadPage}/>
      </div>
  </Router>
    );
  }
}

export default App;
