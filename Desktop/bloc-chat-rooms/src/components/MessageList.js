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
    //this.createMessage = this.createMessage.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    }
    
  
    
    
    
    
    componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat(message) })
        
      });
    }

    //handleChange(e) {
     // this.setState({ newMessage: e.target.value });
 // }
  
    

    render() {
    
    return(

 <div className='message-list'> 
 <ul>
{ this.state.messages.map( (message, index) => {
if (this.props.activeRoom.key === message.roomId) {
 return <li key={ index }> {message.username} says: {message.content} </li>
}

    })}
  </ul>

</div>
    )
  }
}
    

export default MessageList;