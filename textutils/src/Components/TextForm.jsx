import React, { useState } from 'react'
import { Form, Button, Container, Stack } from 'react-bootstrap'


const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpperClick = () => {
        //console.log("Uppercase was clicked!");
        setText(text.toUpperCase());
    }
    const handleLowerClick = () => {
        //console.log("Lowercase was clicked!");
        setText(text.toLowerCase());
    }

    const handleInvertClick = () => {
        let invertText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toLowerCase()) {
                invertText += text[i].toUpperCase();
            } else if (text[i] === text[i].toUpperCase()) {
                invertText += text[i].toLowerCase();
            }
        }
        setText(invertText);
    }

    const handleClearClick = () => {
        if (window.confirm('Are you sure you want to clear all text?')) {
            setText('');
        }
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <Container>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            value={text}
                            as="textarea"
                            rows={10}
                            onChange={handleOnChange} />
                    </Form.Group>
                    <Stack direction='horizontal' gap={3}>
                        <Button variant="primary" size="md" onClick={handleUpperClick}>
                            Convert to Uppercase
                        </Button>
                        <Button variant="secondary" size="md" onClick={handleLowerClick}>
                            Convert to Lowercase
                        </Button>
                        <Button variant="success" size="md" onClick={handleInvertClick}>
                            Invert Cases
                        </Button>
                        <Button variant="warning" size="md" onClick={handleClearClick}>
                            Clear Text
                        </Button>
                    </Stack>
                </Form>
            </Container>

            <Stack gap={3}>
                <div className='p-2'></div>
            </Stack>
            <Container>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>You text summary</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").length} words and {text.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} Minutes read</p>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p>
            </Container>

        </>
    )
}

export default TextForm;