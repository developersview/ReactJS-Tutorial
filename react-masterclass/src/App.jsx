import React from 'react'

const App = () => {
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
    return (
        <>
            <h2>Demo</h2>
        </>
    )
}

export default App