import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'

export class TopNav extends Component {
  state = {
    name: 'flightBrite',
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.state.name}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" className="justify-content-end">
              Sign up
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default TopNav
