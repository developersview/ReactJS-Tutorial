import React from 'react'
import './Video.css'

const Video = ({ title, channel, views, time }) => {
    let topic = 'Components, Props and JSX'
    let bg = 'dark';
    return (
        <>
            <div className='container'>
                <div className="pic">
                    <img
                        src="https://placehold.co/300x200.png"
                        alt="Katherine Johnson"
                    />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel}</div>
                <div className="views">
                    {views} Views <span>.</span> {time}
                </div>
            </div>

        </>
    )
}

export default Video