import React from 'react'
import './PlayButton.css'

const PlayButton = ({ message, children, onClick }) => {

    function handleClick() {
        onClick();
    }

    return (
        <>
            <button onClick={handleClick} className='play'>{children}</button>
        </>
    )
}

export default PlayButton