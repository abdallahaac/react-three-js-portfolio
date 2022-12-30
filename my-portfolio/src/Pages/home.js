import React from "react";
import { Link } from "react-router-dom";
import Art from "./Art";
import GraphicDesign from "./GraphicDesign";
import TechnicalProjects from "./TechnicalProjects";
import "../styles/home.css";
import ThreeJsProjects from "./threeJsProjects";

export default function Home() {
	return (
		<div className="home">
			<TechnicalProjects />
			<Art />
			<GraphicDesign />
		</div>
	);
}
