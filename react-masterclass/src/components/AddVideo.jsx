import React from 'react'
import './AddVideo.css'

const AddVideo = () => {

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <form>
                <input type="text" onChange={handleChange} placeholder='Video title' />
                <input type="text" onChange={handleChange} placeholder='Channel Name' />
                <button className='addVideoButton' onClick={handleSubmit}>Add Video</button>
            </form>
        </>
    )
}

export default AddVideo