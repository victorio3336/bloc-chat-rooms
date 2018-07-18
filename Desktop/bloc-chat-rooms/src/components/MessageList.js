import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props){
    super(props);
    this.state = {messages: [], 
    message:{
    username:'',
   roomId: '',
    content: '',
    sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    },
    newMessage:''
  }
    
    this.messagesRef = this.props.firebase.database().ref('messages');
    
    }
    
    
    
    
    
    componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat(message) })
        
      });
    }

   
  
    

    render() {
    
    return(

 <div className='message-list'> 
 <ul>
{ this.state.messages.map( (message, index) => {
if (this.props.activeRoom.key === message.roomId) {
 return <li key={ index }> {message.username} says: {message.content} </li>
}
console.log(this.props.activeRoom)
console.log(message.roomId)
    })}
  </ul>
</div>
    )
  }
}
    

export default MessageList;