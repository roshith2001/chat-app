import React, { useEffect, useRef } from 'react';
import ChatBubble from '../ChatBubble';
import './ChatArea.css';


function ChatArea(props) {
    const bubbleText = props.messageArray;
    const containerRef = useRef(null);

    useEffect (() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [props.messageArray]);
    console.log(bubbleText)
    return (
        <div className='master-container'>
            <div className='containerChat' ref={containerRef}>
                {bubbleText.map((message, index) => (
                    <ChatBubble text={message.text} classToUse={message.sender}/>
                ))}
                                  
            </div>
        </div>
    );
}

export default ChatArea;