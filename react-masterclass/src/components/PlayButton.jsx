import { React, useState } from 'react';
import './PlayButton.css';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import PauseCircleFilledTwoToneIcon from '@mui/icons-material/PauseCircleFilledTwoTone';

const PlayButton = ({ message, children, onPlay, onPause }) => {

    const [playing, setPlaying] = useState(false);

    function handleClick(e) {
        console.log(e);
        e.stopPropagation();
        playing === true ? onPause() : onPlay();

        setPlaying(!playing);
    }

    return (
        <>
            <button onClick={handleClick} className='play'>
                {playing ? <PauseCircleFilledTwoToneIcon /> : <PlayCircleFilledTwoToneIcon />}
            </button>
        </>
    )
}

export default PlayButton