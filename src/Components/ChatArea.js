import React from 'react';
import ChatBubble from '../ChatBubble';
import './ChatArea.css';


function ChatArea(props) {
    const bubbleText = props.messageArray;
    console.log(bubbleText)
    return (
        <div className='master-container'>
            <div className='containerChat'>
                {bubbleText.map((message, index) => (
                    <ChatBubble text={message.text}/>
                ))}
                                  
            </div>
        </div>
    );
}

export default ChatArea;