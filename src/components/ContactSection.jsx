import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  CardFooter,
  NavLink
} from "reactstrap";
import { contacts } from "../data/contacts";
const ContactSection = (props) => {
  return (
    <CardGroup
      // body
      // inverse
      style={{ backgroundColor: "#333", borderColor: "#000" }}
    >
      {contacts.map((contact, index) => (
        <Card
          // body
          // inverse
          style={{ backgroundColor: "#333", borderColor: "#61dafb" }}
          key={index + 1000}
        >
          <CardImg top width="100%" src={contact.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{contact.title}</CardTitle>
            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
              {project.subtitle}
            </CardSubtitle> */}
            <CardText>{contact.about}</CardText>
            {contact.links.length > 0 ? (
              <CardFooter
                style={{ backgroundColor: "#282c34", borderColor: "#764abc" }}
              >
                {contact.links.map((link) => (
                  <NavLink key={link + 100000} href={link}>{link}</NavLink>
                ))}
              </CardFooter>
            ) : (
              <div />
            )}
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  );
}

export default ContactSection;
