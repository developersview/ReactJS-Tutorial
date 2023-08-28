import React from 'react'
import Video from './components/Video'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <h2>Components</h2>
            <Video
                title='Chandrayaan-3'
                channel='ISRO Official'
                views='4.5M'
                time='1 day ago'
                verified={true}
            />
            <Video
                title='Node JS Titorial'
                channel='Technical Guruji'
                views='12M'
                time='2 months ago'
                verified={false}
            />
            <Video
                title='React JS Titorial'
                channel='CodeEvolution'
                views='12M'
                time='2 months ago'
                verified={true}
            />
        </div>
    )
}

export default App