import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = (props) => {
    return (
        <>
            <Navbar bg={props.mode} expand="lg" data-bs-theme={props.mode}>
                <Container fluid>
                    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="/">
                                {props.aboutText}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <Form.Check // prettier-ignore
                            bg='light'
                            type="switch"
                            id="custom-switch"
                            label="Enable Dark Mode"
                            onClick={props.toggleMode}
                        />
                    </Form>

                </Container>
            </Navbar >
        </>

    )
}


export default NavBar;

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
};

NavBar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'Set About Here'
};

