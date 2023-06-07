import React from 'react'

const MyButton = (props) => {

    return (
        <button count={props.count} onClick={props.onClick}>
            Clicked {props.count} times
        </button>
    )
}

export default MyButton;