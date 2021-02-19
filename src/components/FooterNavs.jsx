import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const FooterNavs = (props) => {
  return (
    <div color="dark" style={{ display: "flex" }}>
      <Nav style={{ display: "block", backgroundColor: "#282c34" }}>
        <NavItem color="dark">
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "#61dafb" }} href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "#61dafb" }} href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "#764abc" }} href="#">
            Another Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav style={{ display: "block" }}>
        <NavLink disabled href="#">
          Home
        </NavLink>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
      <hr />
      <Nav style={{ display: "block" }}>
        <NavLink disabled href="#">
          Projects
        </NavLink>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
      <hr />
      <Nav style={{ display: "block" }}>
        <NavLink disabled href="#">
          About
        </NavLink>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
      <hr />
      <Nav style={{ display: "block" }}>
        <NavLink disabled href="#">
          Contact
        </NavLink>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
      <hr />
      <Nav style={{ display: "block" }}>
        <NavLink disabled href="#">
          Connect With Me
        </NavLink>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
      </Nav>
    </div>
  );
};

export default FooterNavs;
