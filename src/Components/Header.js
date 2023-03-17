import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='container'>
            <div className='image-container'>
                <i class="fa-solid fa-arrow-left"></i>
                <img src={ props.img } className='profile-img' alt='profile'></img>
            </div>
            <div className="text-container">
                <h1>{ props.pName }</h1>
                <p>{ props.status }</p>
            </div>
        </div>
    );
}
export default Header;