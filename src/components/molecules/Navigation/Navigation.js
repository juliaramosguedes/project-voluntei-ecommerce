import React from 'react';
import {
  Button,
  ButtonToolbar,
  Form,
  FormControl,
  Image,
  InputGroup,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
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
        <Navbar.Brand href="/">
          {/* <Image className="nav-logo-bee" src={logoYellowSmallLeft} rounded /> */}
          <Image
            className="nav-logo-voluntei"
            src={logoYellowSmallRight}
            rounded
          />
          <Image className="nav-logo" src={logoYellowSmall} rounded />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */}

          {/* <a href="/" className="navigation-buttons-icons">
            <Image className="navigation-icons" src={magnifyingGlass} rounded />
          </a> */}
          <a href="/" className="navigation-buttons-icons">
            <Image className="navigation-icons" src={magnifyingGlass} rounded />
          </a>
          <a href="/auth" className="navigation-buttons-icons">
            <Image className="navigation-icons" src={profileUser} rounded />
          </a>
          <a href="/payments" className="navigation-buttons-icons">
            <Image className="navigation-icons" src={shoppingCart} rounded />
          </a>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
