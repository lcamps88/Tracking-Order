import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container style={{flexDirection:'column'}}>
          <LinkContainer to="/">
            <Navbar.Brand ><h1 style={{color:'#fff'}}>BPS Tracking</h1></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
