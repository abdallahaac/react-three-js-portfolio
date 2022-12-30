import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import ProjectOne from "../Components/ThreeJsProjects/ProjectOne";
import "../styles/ThreejsProjects.css";
function ThreeJsProjects() {
	useEffect(() => {
		createRoot(document.getElementById("project-one")).render(
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<ProjectOne position={[-1.2, 0, 0]} />
				<ProjectOne position={[1.2, 0, 0]} />
			</Canvas>
		);

		createRoot(document.getElementById("project-two")).render(
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<ProjectOne position={[-1.2, 0, 0]} />
				<ProjectOne position={[1.2, 0, 0]} />
			</Canvas>
		);
	}, []);

	return (
		<div className="project-body">
			<div className="project" id="project-one"></div>
			<div className="project" id="project-two"></div>
		</div>
	);
}

export default ThreeJsProjects;
