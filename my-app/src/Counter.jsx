import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        //counter = 100; we cant modily state manually.
        //setCounter(10);
        alert('You have changed the counter to ' + counter);
    }, [counter]);

    return (
        <>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </>
    )
}

export default Counter