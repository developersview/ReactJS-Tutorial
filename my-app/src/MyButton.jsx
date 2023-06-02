import React from 'react'

const MyButton = ({ count, onClick }) => {

    return (
        <button count={count} onClick={onClick}>
            Clicked {count} times
        </button>
    )
}

export default MyButton;