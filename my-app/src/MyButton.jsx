import React from 'react'
import { useState } from 'react'

const MyButton = () => {
    const handleClick = () => {
        alert("You have clicked a button!")
    }
    return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}

export default MyButton;