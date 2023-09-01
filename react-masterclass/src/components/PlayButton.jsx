import React from 'react'
import './PlayButton.css'

const PlayButton = () => {
    return (
        <>
            <button onClick={() => alert('Play Button')} className='play'>Play</button>
        </>
    )
}

export default PlayButton