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
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <Container>
                <h3>{props.heading}</h3>
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
                        <Button variant="warning" size="md" onClick={handleLowerClick}>
                            Convert to Lowercase
                        </Button>
                    </Stack>
                </Form>
            </Container>

            <Stack gap={3}>
                <div className='p-2'></div>
            </Stack>
            <Container>
                <h3>You text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </Container>

        </>
    )
}

export default TextForm;