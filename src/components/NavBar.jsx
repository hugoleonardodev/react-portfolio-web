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
        <Collapse isOpen={isOpen} style={{justifyContent: "center"}} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag="div">
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/projects">Projects</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/contact">Contact</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown tag="div" nav inNavbar>
              <DropdownToggle nav caret>
                Connect with me
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }} right>
                <DropdownItem style={{ color: "#764abc" }}>CodePen</DropdownItem>
                <DropdownItem style={{ color: "#764abc" }}>CodeSandBox</DropdownItem>
                {/* <DropdownItem divider /> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
        <Collapse isOpen={isOpen} style={{justifyContent: "center"}} navbar>
          <Media src={reduxLogo} style={{maxWidth: "15vw", maxHeight: "15vw", display: "unset"}} alt="rocket"/>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
