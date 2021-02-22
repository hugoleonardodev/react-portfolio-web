import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  CardFooter,
  NavLink,
  CardLink
} from "reactstrap";
import { projects } from "../data/projects";
const ProjectsSection = (props) => {
  return (
    <CardGroup
      style={{ backgroundColor: "#333", borderColor: "#000" }}
    >
      {projects.map((project, index) => (
        <Card
          inverse
          style={{ backgroundColor: "#333", borderColor: "#61dafb" }}
          key={index + 10000}
        >
          <CardImg top width="100%" src={project.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{project.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {project.subtitle}
            </CardSubtitle>
            <CardText>{project.about}</CardText>
            {project.links.length > 0 ? (
              <CardFooter style={{ backgroundColor: "#282c34", borderColor: "#764abc" }}>
                {project.links.map((link, index) => (
                  <NavLink key={index + 10000} href={link} target="_blank">{link}</NavLink>
                ))}
              </CardFooter>
            ) : (
              <div />
            )}
            <CardLink href={project.code} target="_blank"><Button>CodeSandBox</Button></CardLink>
            <CardLink href={project.live} target="_blank"><Button color="success">Live</Button></CardLink>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  );
};

export default ProjectsSection;
