import React from "react";
import $ from "jquery";


var offset = 900; // the scroll point where the button will appear
var duration = 500; // the animation of fade-in and fade-out
var animationDuration = 1500;

export class BackToTop extends React.Component {
	constructor(props){
		super(props);
	}
	animate(){
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(duration);
			} 
			else {
				$('.back-to-top').fadeOut(duration);
			}
		});

	}
	handleClick(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, animationDuration);
		return false;
	}
	componentDidMount(){
		this.animate();
	}

	render(){
		return (
			<a href="#" className="back-to-top" onClick={this.handleClick}>
				<span className="glyphicon glyphicon-chevron-up"></span>
			</a>
		);
	}
}
