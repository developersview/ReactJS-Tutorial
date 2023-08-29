import React from 'react'
import Video from './components/Video'
import './App.css'

const App = () => {

    let videos = [
        {
            id: 1,
            title: 'Chandrayaan - 3',
            channel: 'ISRO Official',
            views: '4.5M',
            time: '1 day ago',
            verified: true
        },
        {
            id: 2,
            title: 'Node JS Titorial',
            channel: 'JavaScript Mastery',
            views: '454K',
            time: '2 day ago',
            verified: false
        },
        {
            id: 3,
            title: 'Nothing Phone',
            channel: 'Technical Guruji',
            views: '5M',
            time: '12 days ago',
            verified: true
        },
        {
            id: 4,
            title: 'React JS Titorial',
            channel: 'CodeEvolution',
            views: '981K',
            time: '1 day ago',
            verified: false
        }
    ]

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