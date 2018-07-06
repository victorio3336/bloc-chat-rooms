import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwvImBgR0KaA6M8xrPnL2cXoHEqISN4vs",
    authDomain: "rooms-e6814.firebaseapp.com",
    databaseURL: "https://rooms-e6814.firebaseio.com",
    projectId: "rooms-e6814",
    storageBucket: "rooms-e6814.appspot.com",
    messagingSenderId: "497587265847"
  };
  firebase.initializeApp(config);


class App extends Component {
  



  render() {
    return (
      <div className="App">
      <header>
      <h1 className="App-title">Chat Rooms></h1>
      <nav>
      <Link to='/'>RoomList</Link>
      </nav>
      </header>
      <main>
      <Route exact path="/" component={RoomList} />
      </main>
      </div>
    );
  }
}

export default App;
