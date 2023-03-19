import React, { useEffect, useState } from 'react';
import './chat-bubble.css';

function ChatBubble(props) {
    const [time, setTime] = useState(new Date());
    useEffect (() => {
        const intervelId = setInterval(() => {
            setTime(new Date());
        }, 1000);
  

    return () => {
        clearInterval(intervelId);
    };
},[]);

    return (
        <div className='bubbleContainer'>
            <div className={(props.classToUse?'chat-bubble sent':'chat-bubble receive')}>
                    {props.text}
                    <div className='time-stamp'>{time.toLocaleTimeString()}</div>
            </div>
        </div>
    );
}

export default ChatBubble;