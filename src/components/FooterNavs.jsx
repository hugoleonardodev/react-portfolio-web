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
      <Nav style={{ color: "dark", backgroundColor: "#282c34", display: "flex", justifyContent: "center", borderColor: "#61dafb" }} tabs>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <Dropdown style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }} nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }} nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu style={{ backgroundColor: "#282c34", borderColor: "#61dafb" }}>
            <DropdownItem style={{ color: "#764abc" }} header>Header</DropdownItem>
            <DropdownItem style={{ color: "#764abc" }} disabled>Action</DropdownItem>
            <DropdownItem style={{ color: "#764abc" }}>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem style={{ color: "#764abc" }}>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
};

export default FooterNavs;
