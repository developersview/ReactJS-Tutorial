import React from 'react'
import './Video.css'
import PlayButton from './PlayButton';

const Video = ({ id, title, channel, views, time, verified }) => {
    let topic = 'Components, Props and JSX'
    let bg = 'dark';

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
                <PlayButton name='Play' message='Video will be started playing' />
                <PlayButton name='Pause' message='Video will be paused' />
            </div>
        </>
    )
}

export default Video