import React from 'react'
import Video from './components/Video'
import './App.css'
import videos from './data/data'
import PlayButton from './components/PlayButton'

const App = () => {

    return (
        <div className='App'>
            <h2>Components</h2>
            {
                videos.map((item, index) => {
                    return (<Video key={index}
                        id={item.id}
                        title={item.title}
                        channel={item.channel}
                        views={item.views}
                        time={item.time}
                        verified={item.verified}
                    />);
                })
            }
        </div>
    )
}

export default App