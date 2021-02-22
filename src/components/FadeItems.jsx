import React, { useState } from "react";
import PropTypes from "prop-types";
import { Fade } from "reactstrap";

const FadeItems = (props) => {

  const [count, setCount] = useState(0);

  const { text } = props;
  return (
    <div style={{ backgroundColor: '#282c34', padding: '30px', borderBottom: "solid 2px #764abc"}}>
      {
        text.map((statement, index) => (
          <Fade
            in={count >= index ? true : false}
            onEnter={() =>
              setTimeout(() => {
                setCount(index + 1);
              }, 2000)
            }
            onExiting={() => setCount(-1)}
            tag="h5"
            className="mt-3"
            key={index + 100}
            style={{ backgroundColor: '#282c34' }}
          >
            {statement}
          </Fade>
        ))
      }
    </div>
  );
};

FadeItems.propTypes ={
  text: PropTypes.string,
}.isRequired;

export default FadeItems;
