import React from "react";
import "./Navbar.css";
function Navbar() {
	return (
		<div className="navbar">
			<h1>
				<a href="/">Abdallah Abou-Chahine</a>
			</h1>
			<h1>
				<a href="/">Portfolio</a>
			</h1>

			<div className="contact-information">
				<h1>
					<a href="/">Github</a>
				</h1>
				<h1>
					<a href="/">Contact Me</a>
				</h1>
			</div>
		</div>
	);
}

export default Navbar;
