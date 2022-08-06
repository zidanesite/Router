import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Navbars() {
  return (
    <div>
	<Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><Link to="/">Home</Link></Navbar.Brand>
        <Nav>
            <Nav.Link href="#home"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/project">Project</Link></Nav.Link>
        </Nav>
        </Container>
    </Navbar>
				
				
				
    </div>
    
  )
}

export default Navbars