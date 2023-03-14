import React from "react";
import { Link } from "react-router-dom";
import "../styles/art.css";
export default function Art() {
	return (
		<>
			{/* <!-- beginning of graphic design section --> */}

			<section className="art-header-container">
				<h1 className="art-title  underline">
					<Link to={"/art"}>Art</Link>
				</h1>
			</section>
			<section class="art-post-container">
				<div className="art-post">
					<img
						class="art-post-img"
						src="https://i.ibb.co/9G9r078/pareidolia.jpg"
						alt=""
						srcset=""
					/>
				</div>

				<div className="art-post">
					<img
						id="clock"
						class="art-post-img"
						src="https://i.ibb.co/fS2Rwwc/A-clock-butterfly-a-birch-tree.jpg"
						alt=""
						srcset=""
					/>
				</div>
				<div className="art-post">
					<img
						class="art-post-img"
						src="https://i.ibb.co/9gmQ8Nj/drawing.jpg"
						alt=""
						srcset=""
					/>
				</div>

				<div className="art-post">
					<img
						class="art-post-img"
						src="https://i.ibb.co/SQHQjGj/acrylic-mirror.jpg"
						alt=""
						srcset=""
					/>
				</div>

				<div className="art-post">
					<img
						class="art-post-img"
						src="https://i.ibb.co/3WnPwBQ/burning-bush.jpg"
						alt=""
						srcset=""
					/>
				</div>
				<div className="art-post">
					<img
						class="art-post-img"
						src="https://i.ibb.co/Lg9W3bZ/self-portrait.jpg"
						alt=""
						srcset=""
					/>
				</div>
			</section>
		</>
	);
}
