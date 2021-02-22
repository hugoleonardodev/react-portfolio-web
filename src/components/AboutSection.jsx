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
    <div>
      {sections.map((section, index) => (
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#61dafb" }}
          key={index + 10}
        >
          <CardBody>
            <CardTitle tag="h3" style={{ color: "#61dafb"}}>{section}</CardTitle>
            {
                <FadeItems text={about[index]} style={{ backgroundColor: "#282c34" }}/>
            }
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default AbouSection;
