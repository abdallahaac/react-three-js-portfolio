import React from "react";
import { Link } from "react-router-dom";
import "../styles/technicalProjects.css";
const TechnicalProjects = ({ props }) => {
	return (
		<div className="technical-projects-main">
			<div className="project one">
				<h2 className="underline project-title">
					{" "}
					<a href="https://andyruew.itch.io/cold-cats">Cold Cats 🔗</a>
				</h2>
				<iframe
					width="900"
					height="800"
					src="https://www.youtube.com/embed/5tfuhcVQGUk"
					title="cold cats preview"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<p>
					<b>Cold Cats</b> is a single player, platform, survival game. You play
					as a cold kitty named Fuligin. Who got separated from his loving
					owner. Your objective is to make sure Fuligin gets food to keep his
					hunger bar full, while also going near objects that emit warmth to
					fill your warmth bar.
				</p>
				<h4 className="project-tool">Created using Unity Game Engine</h4>
			</div>

			<div className="project one">
				<h2 className="underline project-title">
					{" "}
					<a href="https://diycraftkits.ca">DIY Craft Kits 🔗</a>
				</h2>
				<img
					src="https://i.ibb.co/Dt3pFhD/Screen-Shot-2022-10-08-at-5-21-25-AM.png"
					alt=""
				/>
				<p>
					<b> DIY Craft Kits</b>, a branch Of Maker House. Initially founded in
					2015, Maker House’s mission is to bring the maker movement to main
					street retail.
				</p>
				<h4 className="project-tool">Created using WordPress and Shopify </h4>
			</div>

			<div className="project one">
				<h2 className="underline project-title">
					{" "}
					<a href="https://giftboxshop.ca">Gift Box Shop 🔗</a>
				</h2>
				<video
					width="716"
					height="123"
					src="https://giftboxshop.ca/wp-content/uploads/2022/08/MapleLovers_GiftBox_IGpost.mp4#t=2.2,36"
					title="cold cats preview"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					controls
					muted
					class="project-snippet"
				></video>
				<p>
					Gift Box Shop, a branch Of Maker House. Initially founded in 2015,
					Maker House’s mission is to bring the maker movement to main street
					retail.
				</p>
				<h4 className="project-tool">Created using WordPress and Shopify</h4>
			</div>
		</div>
	);
};

export default TechnicalProjects;
