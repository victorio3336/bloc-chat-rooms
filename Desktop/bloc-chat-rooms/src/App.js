import React, { Component } from 'react';

import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
constructor(props) {
super(props);
this.state = {
activeRoom : {},  
};
}

setRoom(room) {
  this.setState({activeRoom : room});
}



  render() {
    return (
      <div className="App">
   <h1 className="App-title">Chat Rooms</h1>
      <nav className="nav-container">
      <h1>Available Rooms:</h1>
       <RoomList firebase={firebase}
    activeRoom={this.state.activeRoom} setRoom={(room) => this.setRoom(room)}/>
    </nav>
      <MessageList firebase={firebase} activeRoom={this.state.activeRoom} activeUser={this.state.activeUser} setUser={this.setUser}/>
     </div>
    );
  }
}

export default App;
