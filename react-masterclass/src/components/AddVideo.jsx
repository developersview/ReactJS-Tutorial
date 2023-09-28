import React, { useState } from 'react'
import './AddVideo.css'

const initialState = {
    title: '',
    channel: '',
    views: '',
    time: ''
};

const AddVideo = ({ onAdd }) => {

    const [video, setVideo] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(video);
        console.log(video);
        setVideo(initialState)
    }

    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        });
        //console.log(video);
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    name='channel'
                    onChange={handleChange}
                    placeholder='Video Channel'
                    value={video.channel}
                />
                <input
                    type="text"
                    name='title'
                    onChange={handleChange}
                    placeholder='Video title'
                    value={video.title}
                />
                <input
                    type="text"
                    name='views'
                    onChange={handleChange}
                    placeholder='Videos views'
                    value={video.views}
                />
                <input
                    type="text"
                    name='time'
                    onChange={handleChange}
                    placeholder='Video time'
                    value={video.time}
                />
                <button className='addVideoButton' onClick={handleSubmit}>Add Video</button>
            </form>
        </>
    )
}

export default AddVideo