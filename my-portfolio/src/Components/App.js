import React from "react";
import { Route, Routes } from "react-router-dom";
import GraphicDesign from "../Pages/GraphicDesign";
import ThreeJsProject from "../Pages/threeJsProjects";

import Art from "../Pages/Art";
import Home from "../Pages/home";

import TechnicalProjects from "../Pages/TechnicalProjects";

import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/technical-projects" element={<TechnicalProjects />} />
				<Route path="/three-js-projects" element={<ThreeJsProject />} />
				<Route path="/graphic-design" element={<GraphicDesign />} />
				<Route path="/art" element={<Art />} />
			</Routes>
		</>
	);
};

export default App;
