import React from 'react'
import Video from './components/Video'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <h2>Components</h2>
            <Video title='React JS Tutorial' channel='ISRO Official' views='4.5M' time='August 23, 2023 17:20PM' />
            <Video title='Node JS Titorial' channel='Technical Guruji' views='12M' time='July 8th, 2023 08:45AM' />
        </div>
    )
}

export default App