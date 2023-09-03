import React from 'react'
import './PlayButton.css'

const PlayButton = ({ message, name }) => {

    function handleClick() {
        alert(message);
        console.log(message);
    }

    return (
        <>
            <button onClick={handleClick} className='play'>{name}</button>
        </>
    )
}

export default PlayButton