import React, { useState } from 'react'
import './AddVideo.css'

const AddVideo = () => {

    const [video, setVideo] = useState({
        title: 'Space Technology',
        channel: 'NASA Official',
        views: '4.5M',
        time: '2 years ago',
        verified: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(video);
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        });
        //console.log(video);
    }

    return (
        <>
            <form>
                <input type="text" name='title' onChange={handleChange} placeholder='Video title' />
                <input type="text" name='views' onChange={handleChange} placeholder='Channel Name' />
                <button className='addVideoButton' onClick={handleSubmit}>Add Video</button>
            </form>
        </>
    )
}

export default AddVideo