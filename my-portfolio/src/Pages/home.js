import React from "react";
import Art from "./Art";
import GraphicDesign from "./GraphicDesign";
import TechnicalProjects from "./TechnicalProjects";

export default function Home() {
	return (
		<div className="home">
			<TechnicalProjects />
			<GraphicDesign />
			<Art />
		</div>
	);
}
