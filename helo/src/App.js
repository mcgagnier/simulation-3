import React, { Component } from 'react';
import './App.css';
import Auth from './component/Auth/Auth';
import Nav from './component/Nav/Nav';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Auth />
        <Form />
        <Post />
      </div>

    );
  }
}

export default App;
