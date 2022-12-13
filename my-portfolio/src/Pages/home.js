import React from "react";
import Navbar from "../Components/Navbar";
import GraphicDesign from "./GraphicDesign";
import TechnicalProjects from "./TechnicalProjects";

export default function Home() {
	return (
		<div className="home">
			<TechnicalProjects />
			<GraphicDesign />
		</div>
	);
}
