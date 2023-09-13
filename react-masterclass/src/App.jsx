import React from 'react'
import Video from './components/Video'
import './App.css'
import videos from './data/data'
import PlayButton from './components/PlayButton'


const App = () => {

    return (
        <div className='App'>
            <h2>Videos App</h2>
            {
                videos.map((item, index) => {
                    return (<Video key={index}
                        id={item.id}
                        title={item.title}
                        channel={item.channel}
                        views={item.views}
                        time={item.time}
                        verified={item.verified}>

                        <PlayButton
                            onPlay={() => {
                                alert(`Playing ${item.title}`);
                                console.log(`Play button has been clicked for ${item.title}`);
                            }}
                            onPause={() => {
                                window.confirm(`Do you want to stop playing ${item.title}?`);
                                console.log(`Pause Button has been clicked for ${item.title}`);
                            }} />


                    </Video>);
                })
            }
        </div>
    )
}

export default App