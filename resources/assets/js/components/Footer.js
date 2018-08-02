// Components
import React from "react";
import FontAwesome from "react-fontawesome";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BackToTop } from "../components/BackToTop";

const StyledFooterSection = styled.div`
  //display: flex;
  //justify-content: center;
  font-size: larger;
  font-weight: 900;
  color: black;
  margin-top: 14px;
  margin-bottom: 14px;
  a {
    &:hover {
      color: #BE1E2D;
    }
  }
  .social-media {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Footer = () => {
  return (
    <Navbar>
      <StyledFooterSection>
        <a href="https://www.facebook.com/PINTUGTD" className="social-media" target="_blank">
          <FontAwesome name={"facebook-square"} style={{ fontSize: "1.5em" }}/>
        </a>
        <a href="https://www.instagram.com/pintugtd" className="social-media" target="_blank">
          <FontAwesome name={"instagram"} style={{ fontSize: "1.5em" }}/>
        </a>
        <p>
          Copyright © {new Date().getFullYear()} by <a href="https://pintusingapura.org" target="_blank">PINTU</a>
        </p>
      </StyledFooterSection>
      <BackToTop/>
    </Navbar>
  );
};

export default Footer;
