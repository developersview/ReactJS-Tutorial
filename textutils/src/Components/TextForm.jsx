import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TextForm = (props) => {
    const [text, setText] = useState('Enter text here');

    const handleUpperClick = () => {
        //console.log("Uppercase was clicked!");
        setText(text.toUpperCase());
    }
    const handleLowerClick = () => {
        //console.log("Lowercase was clicked!");
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <h4>{props.heading}</h4>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        value={text}
                        as="textarea"
                        rows={10}
                        onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" size="md" onClick={handleUpperClick}>
                    Convert to Uppercase
                </Button>{' '}
                <Button variant="warning" size="md" onClick={handleLowerClick}>
                    Convert to Uppercase
                </Button>
            </Form>
        </>
    )
}

export default TextForm;