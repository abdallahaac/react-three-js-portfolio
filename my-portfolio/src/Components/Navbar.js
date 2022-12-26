import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
	const [isPortfolioHovered, setPortfolioHovered] = useState(false);
	const [isDropDownVisible, setDropDownVisible] = useState("hidden");

	const [isMobileBurgerClicked, setMobileBurger] = useState(false);

	useEffect(() => {
		if (isPortfolioHovered) {
			setDropDownVisible("visible");
		} else {
			setDropDownVisible("hidden");
		}
	}, [isPortfolioHovered]);
	return (
		<>
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
				<div className="burger-menu">
					{isMobileBurgerClicked == false ? (
						<>
							{" "}
							<svg
								onMouseDown={() => {
									setMobileBurger(true);
								}}
								xmlns="http://www.w3.org/2000/svg"
								width="35px"
								height="35px"
								viewBox="0 0 24 24"
								role="img"
								aria-labelledby="hamburgerIconTitle"
								stroke="#fff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								fill=""
								color="#000000"
							>
								{" "}
								<title id="hamburgerIconTitle">Menu</title>{" "}
								<path d="M6 7L18 7M6 12L18 12M6 17L18 17" />{" "}
							</svg>
						</>
					) : (
						<>
							<svg
								onMouseDown={() => {
									setMobileBurger(false);
								}}
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								id="Layer_1"
								width={"35px"}
								height={"35px"}
								viewBox="0 0 50 50"
								enable-background="new 0 0 50 50"
							>
								<path
									fill="#ffffff"
									d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309  l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414  L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423  c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423  C8.625,39.813,8.625,40.447,9.016,40.837z"
									id="id_101"
								/>
							</svg>
						</>
					)}
				</div>
			</div>

			{isMobileBurgerClicked ? (
				<>
					<div className="dropdown">
						<li>
							<Link to={"/technical-projects"}>Technical Projects</Link>
						</li>
						<li>
							<Link to={"/graphic-design"}>Graphic Design</Link>
						</li>
						<li>
							<Link to={"/art"}>Art</Link>
						</li>
						<li>
							<Link>Contact Me</Link>
						</li>
					</div>
				</>
			) : null}
		</>
	);
}

export default Navbar;
