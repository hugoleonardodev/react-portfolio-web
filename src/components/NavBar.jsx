import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media
} from "reactstrap";
import reactLogo from '../images/react-logo.svg';
import reduxLogo from '../images/redux-logo.svg';
// sample with useState
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Media src={reactLogo} style={{maxWidth: "25vw", maxHeight: "25vw", display: "unset"}} alt="rocket"/>
        </Collapse>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects">Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/contact">Contact</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/about">About</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Connect with me
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }} right>
                <DropdownItem style={{ color: "#764abc" }}>CodePen</DropdownItem>
                <DropdownItem style={{ color: "#764abc" }}>CodeSandBox</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        <Collapse isOpen={isOpen} navbar>
          <Media src={reduxLogo} style={{maxWidth: "20vw", maxHeight: "20vw", display: "unset"}} alt="rocket"/>
        </Collapse>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
