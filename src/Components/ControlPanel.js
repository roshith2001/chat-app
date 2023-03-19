import React, { useState } from 'react';
import './ControlPanel.css';

function ControlPanel(props) {
    
    const [value, setValue] = useState('');

    const onHandleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        props.onValueChange(newValue);
        console.log(value);
    }  
    return (
        <div className='master-control'>
            <div className='control-container'> 
                <button className='attachment' onClick={props.Who}>{props.icon}</button>
                <input type = "text" value={props.value} onChange={onHandleChange}
                onFocus={props.focusChange} onBlur={props.blurChange}></input>
                <button className='send-btn' onClick={props.messageSend}><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    );
}

export default ControlPanel;