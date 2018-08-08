import React from "react";
import styled from "styled-components";


const StyledAnchor = styled.a`
  background: none;
	margin: 0;
	position: fixed;
	bottom: 0;
	right: 0;
	width: 70px;
	height: 70px;
	z-index: 100;
	display: none;
	text-decoration: none;
	span {
	  font-size: 60px;
	}
`;
export const BackToTop = () => {
	const animate = () => {
    let offset = 900; // the scroll point where the button will appear
    let duration = 500; // the animation of fade-in and fade-out
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(duration);
			}
			else {
				$('.back-to-top').fadeOut(duration);
			}
		});
	};
	const handleClick = (e) => {
		e.preventDefault();
    let animationDuration = 1500;
		$('html, body').animate({scrollTop: 0}, animationDuration);
		return false;
	};

  animate();
  return (
    <StyledAnchor className={"back-to-top"} onClick={handleClick}>
      <span className="glyphicon glyphicon-chevron-up"></span>
    </StyledAnchor>
  );
};
