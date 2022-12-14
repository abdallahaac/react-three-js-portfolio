import React from "react";
import { Route, Routes } from "react-router-dom";
import GraphicDesign from "../Pages/GraphicDesign";
import Art from "../Pages/Art";
import Home from "../Pages/Home";

import TechnicalProjects from "../Pages/TechnicalProjects";

import Navbar from "./Navbar";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/technical-projects" element={<TechnicalProjects />} />
				<Route path="/graphic-design" element={<GraphicDesign />} />
				<Route path="/art" element={<Art />} />
			</Routes>
		</>
	);
};

export default App;
