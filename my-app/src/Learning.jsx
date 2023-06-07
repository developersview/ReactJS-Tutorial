import React from 'react'
import PropTypes from 'prop-types'

const Learning = (props) => {
    const name = props.name;
    let isShowing = true;
    if (name ? isShowing = true : isShowing = false);
    return (
        <>
            <h2>Hello {isShowing ? name : 'user'} !</h2>
            {name ? (
                <>
                    <p>Name is : {name}</p>
                </>
            ) : (
                <>
                    <p>Name is not available!</p>
                </>
            )}
        </>
    )
}

Learning.propTypes = {
    name: PropTypes.string
}

export default Learning