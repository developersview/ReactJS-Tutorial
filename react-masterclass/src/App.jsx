import React from 'react'
import Video from './components/Video'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <h2>Components</h2>
            <Video
                title='React JS Tutorial'
                channel='ISRO Official'
                views='4.5M'
                time='1 day ago'
            />
            <Video
                title='Node JS Titorial'
                channel='Technical Guruji'
                views='12M'
                time='2 months ago'
            />
            <Video
                title='Node JS Titorial'
                channel='Technical Guruji'
                views='12M'
                time='2 months ago'
            />
        </div>
    )
}

export default App