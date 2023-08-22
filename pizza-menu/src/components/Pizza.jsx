import React from 'react';
import spinaci from '../assests/spinaci.jpg';

const Pizza = () => {
    return (
        <>
            <div>
                <img src={spinaci} alt="Pizza Spinaci" />
                <h2>Pizza Spinaci</h2>
                <p>Tomato, mozarella, spinach, and ricotta cheese</p>
            </div>
        </>
    )
}

export default Pizza