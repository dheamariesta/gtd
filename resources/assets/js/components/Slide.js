import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";

const Slide = ({ data, ...rest }) => {
  const { src, details } = data;
  return (
    <div {...rest}>
      <Image src={src} responsive/>
      <h1>{details}</h1>
    </div>
  );
};

const StyledSlide = styled(Slide)`
  cursor: pointer;
  padding: 15px;
`;

export default StyledSlide;