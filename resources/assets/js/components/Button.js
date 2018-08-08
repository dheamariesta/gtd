import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { exodiaBg } from "../helpers/color";

export const ExodiaThemedButton = styled(Button)`
  border-radius: 10em;
	background-color: ${exodiaBg}
	color: white;
	&:hover, &:active, &:active:hover, &:active:focus, &:focus {
		background-color: #4C1818;
		color: white;
	}
`;
