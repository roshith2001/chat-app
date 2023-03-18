import React, { useRef, useState } from 'react';
import './ControlPanel.css';

function ControlPanel(props) {
    
    const [value, setValue] = useState('');

    const onHandleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        props.onValueChange(newValue);
    }  
    return (
        <div className='master-control'>
            <div className='control-container'> 
                <button className='attachment'><i class="fa-regular fa-image"></i></button>
                <input type = "text" value={props.value} onChange={onHandleChange}></input>
                <button className='recording'><i class="fa-solid fa-microphone"></i></button>
                <button className='send-btn' onClick={props.messageSend}><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    );
}

export default ControlPanel;