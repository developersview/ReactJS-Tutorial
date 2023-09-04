import React from 'react'
import './Video.css'

const Video = ({ id, title, channel, views, time, verified, children }) => {

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
                <div className="">{children}</div>
            </div >
        </>
    )
}

export default Video