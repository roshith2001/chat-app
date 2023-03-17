import React from 'react';
import './ControlPanel.css';

function ControlPanel(props) {
    return (
        <div className='master-control'>
            <div className='control-container'> 
                <button className='attachment'><i class="fa-regular fa-image"></i></button>
                <input type = "text"></input>
                <button className='recording'><i class="fa-solid fa-microphone"></i></button>
                <button className='send-btn'><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    );
}

export default ControlPanel;