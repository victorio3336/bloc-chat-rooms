import React, { Component } from 'react';

class RoomList extends Component {
constructor(props){
super(props);  
this.state = {
    rooms: [],

  newRoom: ''
};


this.roomsRef = this.props.firebase.database().ref('rooms');

}

componentDidMount() {

  this.roomsRef.on('child_added', snapshot => {
  const room = snapshot.val();
  room.key = snapshot.key;
  console.log('room list mounting', room);
  this.setState({ rooms: this.state.rooms.concat( room ) })
  }); 
}

handleChange(e) {
this.setState({ newRoom: e.target.value })
}


handleSubmit(e) { 
e.preventDefault();
this.roomsRef.push({ 
name: this.state.newRoom
}); 
this.setState({newRoom:""});
}

render() {
  return(
    <div>
  <ul className="room-list">
  {this.state.rooms.map( (room, index)=>
 <li key={index}>
 <button className="roomName" onClick={ () => this.props.setRoom(room)}>{room.name}</button>
</li>)}
</ul>
  <form id="createroomform" onSubmit={ (e) => this.handleSubmit(e) }>
 <input type="text"  value={ this.state.newRoom} onChange={ (e) => this.handleChange(e)} placeholder="Create a new room"/>
  <button>Submit</button>
  </form>

  </div> 
     );
    }
  }
    
    
    
  
  
    
        
export default RoomList;