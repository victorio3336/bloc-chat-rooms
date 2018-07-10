import React, { Component } from 'react';

class RoomList extends Component {
constructor(props){
super(props);  
this.state = {
    rooms: []
}


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
  console.log('hola');
 // this.roomsRef.push({
   //name: newRoomName
  //});
  //this.set.State({ newRoomName: ""});

}



  
    
    


  render() {
  return(
    <section className="rooms">
  {this.state.rooms.map( (room, index)=>
  <li key={index}>
  {room.name}
  </li>)}
  <form id="createRoom" onSubmit={ (e) => this.handleSubmit(e) }>
  <input type="text"  value={ this.state.newRoom} onChange={ (e) => this.handleChange(e)} />
  <input type="submit" />
  </form>

  </section> 
     );
    }
  }
    
    
    
  
  
    
        
export default RoomList;