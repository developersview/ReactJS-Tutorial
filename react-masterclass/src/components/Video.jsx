import React from 'react'
import './Video.css'

const Video = ({ title, channel, views, time, verified }) => {
    let topic = 'Components, Props and JSX'
    let bg = 'dark';

    return (
        <>
            <div className='container'>
                <div className="pic">
                    <img
                        src="https://picsum.photos/id/8/250/200"
                        alt="Katherine Johnson"
                    />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel} {verified ? '✅' : null}</div>
                <div className="views">
                    {views} Views <span>.</span> {time}
                </div>
            </div>
        </>
    )
}

export default Video