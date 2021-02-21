import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

const FooterNavs = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div color="dark">
      <Nav style={{ color: "dark", backgroundColor: "#282c34", display: "flex", justifyContent: "center" }} tabs>
        <NavItem style={{ backgroundColor: "#282c34" }}>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Projects
          </NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">LinkedIn</NavLink>
          <NavLink href="#">GitHub</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <Dropdown style={{ backgroundColor: "#282c34" }} nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle style={{ backgroundColor: "#282c34" }} nav caret>
            Connect with me
          </DropdownToggle>
          <DropdownMenu style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }}>
            <DropdownItem style={{ color: "#764abc" }}>CodePen</DropdownItem>
            {/* <DropdownItem divider /> */}
            <DropdownItem style={{ color: "#764abc" }}>CodeSandBox</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
};

export default FooterNavs;
