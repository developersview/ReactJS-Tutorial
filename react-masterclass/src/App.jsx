import { React, useState } from 'react'
import Video from './components/Video'
import './App.css'
import videoDB from './data/data'
import PlayButton from './components/PlayButton'
import AddVideo from './components/AddVideo'


const App = () => {
    console.log('Rendering App');
    const [videos, setVideos] = useState(videoDB);

    function addVideos(video) {
        setVideos([
            ...videos,
            { ...video, id: videos.length + 1 }
        ])
    }

    return (
        <div className='App'>
            <h2>Videos App</h2>
            <AddVideo onAdd={addVideos}></AddVideo>
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