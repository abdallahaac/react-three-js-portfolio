import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Navbar from "./Navbar";
import TechnicalProjects from "./TechnicalProjects";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" />
				<Route path="/technical-projects" element={<TechnicalProjects />} />
			</Routes>
		</>
	);
};

export default App;
