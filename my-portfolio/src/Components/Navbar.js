import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
	const [isPortfolioHovered, setPortfolioHovered] = useState(false);
	const [isDropDownVisible, setDropDownVisible] = useState("hidden");

	useEffect(() => {
		if (isPortfolioHovered) {
			setDropDownVisible("visible");
		} else {
			setDropDownVisible("hidden");
		}
	}, [isPortfolioHovered]);
	return (
		<div class="nav-container">
			<nav class="nav-item name">
				<Link to={"/"}>
					<h1 className="name underline ">Abdallah Abou-Chahine</h1>
				</Link>
			</nav>
			<nav class="nav-item info portoflio">
				<h2
					onMouseEnter={() => {
						setPortfolioHovered(true);
					}}
					onMouseLeave={() => {
						setPortfolioHovered(false);
					}}
				>
					<a class="nav-heading change-background-on-hover ">Portfolio</a>
				</h2>
				<div
					className="test"
					style={{ visibility: isDropDownVisible }}
					onMouseEnter={() => {
						setPortfolioHovered(true);
					}}
					onMouseLeave={() => {
						setPortfolioHovered(false);
					}}
				>
					<Link to={"/technical-projects"} className="underline links">
						Technical Projects
					</Link>
					<Link to={"/graphic-design"} className="underline links">
						Graphic Design
					</Link>
					<Link to={"/art"} className="underline links">
						Art
					</Link>
				</div>
			</nav>
			<nav class="nav-item info">
				<h2>
					<a
						href="https://github.com/abdallahaac"
						class=" nav-heading change-background-on-hover  "
					>
						Github
					</a>
				</h2>
				<h2>
					<a
						href="mailto:aceydesignz@gmail.com"
						id="contact-btn"
						class="nav-heading contact"
					>
						Contact Me
					</a>
				</h2>
			</nav>

			{/* <!-- burger menu only displays on mobile --> */}
		</div>
	);
}

export default Navbar;
