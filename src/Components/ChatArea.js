import React from 'react';
import ChatBubble from '../ChatBubble';
import './ChatArea.css';


function ChatArea(props) {
    return (
        <div className='master-container'>
            <div className='containerChat'>
                <ChatBubble id="1" message="This is working fine"/>                  
            </div>
        </div>
    );
}

export default ChatArea;