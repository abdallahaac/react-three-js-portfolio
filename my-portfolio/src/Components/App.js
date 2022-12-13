import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";
import TechnicalProjects from "../Pages/TechnicalProjects";
import GraphicDesign from "../Pages/GraphicDesign";
import Art from "../Pages/Art";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/technical-projects" element={<TechnicalProjects />} />
				<Route path="/graphic-design" element={<GraphicDesign />} />
				<Route path="/graphic-design" element={<Art />} />
			</Routes>
		</>
	);
};

export default App;
