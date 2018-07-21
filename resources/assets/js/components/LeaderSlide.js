import React from "react";
import { Image } from "react-bootstrap";


const LeaderSlide = ({data, onChangeLeader, ...rest})  => {
  const {image, details } = data;
  return (
    <div {...rest}>
      <Image src={image} responsive/>
      <h1>{details}</h1>
    </div>
  );
};

export default LeaderSlide;