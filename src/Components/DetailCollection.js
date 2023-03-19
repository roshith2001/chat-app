import React, { useState } from 'react';
import './DetailsCollection.css'

function DetailCollection(props) {
    const [value, setValue] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(value);
        console.log(value);
        setSubmitted(true);
    }
    if(submitted){
        return null;
    }
    return (
        <div className='masterContainer-details'>
            <div className='container-details'>
                <form onSubmit={handleSubmit}>
                    <label>Type your Name here: </label>
                    <input type='text' name='name' value={value} onChange={(event) => 
                        setValue(event.target.value)
                        }
                        />
                    <button type='submit' className='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default DetailCollection;