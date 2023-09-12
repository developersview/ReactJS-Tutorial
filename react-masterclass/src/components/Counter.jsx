import { React, useState } from 'react'

const Counter = () => {
    console.log('render counter');
    let [number, setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation();
        setTimeout(() => {
            setNumber(number + 1);
        }, 2000)
        console.log(number + 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter