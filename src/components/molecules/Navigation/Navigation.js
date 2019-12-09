import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { logoYellowSmall } from '../../../images';
// import { logoYellowSmallLeft } from '../../../images';
import { logoYellowSmallRight } from '../../../images';
import { magnifyingGlass } from '../../../images';
import { profileUser } from '../../../images';
import { shoppingCart } from '../../../images';
import './Navigation.css';

const Navigation = () => (
  <div>
    <div className="navigation-container">
      <Navbar
        collapseOnSelect
        className="navigation"
        bg="dark"
        variant="dark"
        style={{ color: 'black' }}
      >
        <Navbar.Brand href="#home">
          {/* <Image className="nav-logo-bee" src={logoYellowSmallLeft} rounded /> */}
          <Image
            className="nav-logo-voluntei"
            src={logoYellowSmallRight}
            rounded
          />
          <Image className="nav-logo" src={logoYellowSmall} rounded />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link className="NavLinks" href="#home">Masculino</Nav.Link>
        <Nav.Link className="NavLinks" href="#features">Feminino</Nav.Link>
        <Nav.Link className="NavLinks" href="#pricing">Infantil</Nav.Link> */}
        </Nav>
        <Form inline>
          <Button className="navigation-buttons-icons" variant="dark">
            <Image className="navigation-icons" src={magnifyingGlass} rounded />
          </Button>
          <Button className="navigation-buttons-icons" variant="dark">
            <Image className="navigation-icons" src={profileUser} rounded />
          </Button>
          <Button className="navigation-buttons-icons">
            <Image className="navigation-icons" src={shoppingCart} rounded />
          </Button>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
