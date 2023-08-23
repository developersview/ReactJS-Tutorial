import React from 'react'

const App1 = () => {
    let name = 'Pranoy Chakraborty';

    return (
        <>
            <h2>App</h2>
            <div className="">{name}</div>
            <Demo />
        </>
    )
}

const Demo = () => {
    console.log('Demo Component');
    return (
        <>
            <h2>Demo</h2>
        </>
    )
}

export default App1