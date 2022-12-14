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

			<nav class="nav-item burger">
				<img
					class="burger-bar"
					id="burger-bar-img"
					src="/assets/burger-bar.svg"
					alt="s"
				/>
			</nav>
			<nav class="nav-item burger">
				<img
					class="burger-bar closed"
					id="burger-bar-closed-img"
					src="/assets/closed-burger.svg"
					alt="s"
				/>
			</nav>

			<nav class="burger-nav" id="expanded-burger-nav">
				<div class="burger-nav-link-container tech">
					<a class="burger-nav-link tech" href="/technical-projects.html">
						Technical Projects
					</a>
				</div>
				<div class="burger-nav-link-container design">
					<a class="burger-nav-link design" href="/graphic-design.html">
						Graphic Design
					</a>
				</div>
				<div class="burger-nav-link-container art">
					<a class="burger-nav-link art" href="/art.html">
						Art
					</a>
				</div>
				{/* <!-- <div class="burger-nav-link-container blog">
                            <a class="burger-nav-link blog" href="/blog.html">Blogs</a>
                        </div> --> */}
				<div class="burger-nav-link-container blog">
					<a
						class="burger-nav-link blog"
						href="mailto:abdallahabouchahine@cmail.carleton.ca"
					>
						Contact me
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
