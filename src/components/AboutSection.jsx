import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import FadeItems from "./FadeItems";

import { sections, about } from '../data/about'

const AbouSection = (props) => {

  return (
    // <CardGroup
    //   body
    //   inverse
    //   style={{ backgroundColor: "#333", borderColor: "#000" }}
    // >
    <div>

      {sections.map((section, index) => (
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#61dafb" }}
          key={index + 10}
        >
          {/* <CardImg top width="100%" src={project.image} alt="Card image cap" /> */}
          <CardBody>
            <CardTitle tag="h3" style={{ color: "#61dafb"}}>{section}</CardTitle>
            {
                <FadeItems text={about[index]} style={{ backgroundColor: "#282c34" }}/>
            }
          </CardBody>

          {/* <CardBody>
            <CardTitle tag="h5">{project.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {project.subtitle}
            </CardSubtitle>
            <CardText>{project.about}</CardText>
            {project.links.length > 0 ? (
              <CardFooter style={{ backgroundColor: "#282c34", borderColor: "#764abc" }}>
                {project.links.map((link) => (
                  <NavLink href={link}>{link}</NavLink>
                ))}
              </CardFooter>
            ) : (
              <div />
            )}
            <Button>Button</Button>
          </CardBody> */}
        </Card>
      ))}
    </div>
    // </CardGroup>
  );
};

export default AbouSection;
