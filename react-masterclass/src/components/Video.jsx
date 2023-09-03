import React from 'react'
import './Video.css'
import PlayButton from './PlayButton';

const Video = ({ id, title, channel, views, time, verified }) => {
    let topic = 'Components, Props and JSX'
    let bg = 'dark';

    let playOnClick = () => {
        alert('Video will be started playing');
        console.log('Play Button Clicked');
    }
    let pauseOnClick = () => {
        window.confirm('Are you sure you want to pause the video?');
        console.log('Pause Button Clicked');
    }

    return (
        <>
            <div className='container'>
                <div className="pic">
                    <img
                        src={`https://picsum.photos/id/${id}/250/200`}
                        alt="Katherine Johnson"
                    />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel} {verified ? '☑️' : null}</div>
                <div className="views">
                    {views} Views <span>.</span> {time}
                </div>
                <PlayButton
                    message='Video will be started playing'
                    onClick={playOnClick} >
                    Play
                </PlayButton>
                <PlayButton
                    message='Video will be paused'
                    onClick={pauseOnClick}>
                    Pause
                </PlayButton>
            </div >
        </>
    )
}

export default Video