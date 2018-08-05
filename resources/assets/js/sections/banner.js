import React from "react";
import { Row, Image } from "react-bootstrap";
import { screenMdMin } from "../helpers/breakpoint";

import styled from "styled-components";


const StyledContainer = styled.div`
  padding-right: 0;  
  padding-left: 0;
  @media(min-width: ${screenMdMin}){
    padding-top: 50px; 
  }
  img {
    width: 100vw;
  }
`;

export const Banner = () => {
  return (
    <Row className="flex-center">
      <StyledContainer>
        <a href="/exodia">
          <Image src="/images/coming_soon.jpg" alt="banner" responsive />
        </a>
      </StyledContainer>
    </Row>
  )
};
