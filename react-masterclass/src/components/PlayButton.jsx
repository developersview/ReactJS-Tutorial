import React from 'react'
import './PlayButton.css'

const PlayButton = ({ message, children, onPlay, onPause }) => {

    let playing = false;

    function handleClick(e) {
        console.log(e);
        playing === true ? onPause() : onPlay();
        playing = !playing;
    }

    return (
        <>
            <button onClick={handleClick} className='play'>{playing ? '⏸' : '▶'}</button>
        </>
    )
}

export default PlayButton