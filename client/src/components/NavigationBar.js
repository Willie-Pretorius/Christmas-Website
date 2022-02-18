import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          <div className='goldBorder'>
            <h3 className='brandText goldText'>Santa's Postbox</h3>
          </div>
        </Navbar.Brand>
        <Nav className='mt-auto'>
          <Nav.Link href='/'>
            <p className='goldText navText'>Home</p>
          </Nav.Link>
          <Nav.Link href='/mailbox'>
            <p className='goldText navText'>Santa's lists</p>
          </Nav.Link>
          <Nav.Link href='/gifthub'>
            <p className='goldText navText'>Gifthub</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
