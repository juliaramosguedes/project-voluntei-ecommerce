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
            src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FlogoYellowSmallRight.jpg?alt=media&token=d7a77be0-2ea2-4be8-96e2-98fde99ab905"
            rounded
          />
          <Image className="nav-logo" src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FlogoYellowSmall.jpg?alt=media&token=62aeec02-f0c0-4e14-81b1-c389f3a3743b" rounded />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */}

          {/* <a href="/" className="navigation-buttons-icons">
            <Image className="navigation-icons" src={magnifyingGlass} rounded />
          </a> */}
          <a href="/" className="navigation-buttons-icons">
            <Image className="navigation-icons" src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FmagnifyingGlass.svg?alt=media&token=767a0fbd-1ed8-4448-90cb-74a90070f46b" rounded />
          </a>
          <a href="/user" className="navigation-buttons-icons">
            <Image className="navigation-icons" src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FprofileUser.svg?alt=media&token=4773f261-845a-4ea0-bc88-1aa53cbf796a" rounded />
          </a>
          <a href="/cart" className="navigation-buttons-icons">
            <Image className="navigation-icons" src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FshoppingCart.svg?alt=media&token=99713b56-bdd1-4789-a00f-1695b39a9b20" rounded />
          </a>
        </Form>
      </Navbar>
    </div>
  </div>
);

export default Navigation;
