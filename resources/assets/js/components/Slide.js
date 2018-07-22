import React from "react";
import { Image } from "react-bootstrap";


const Slide = ({data, ...rest})  => {
  const {src, details } = data;
  return (
    <div {...rest}>
      <Image src={src} responsive/>
      <h1>{details}</h1>
    </div>
  );
};

export default Slide;