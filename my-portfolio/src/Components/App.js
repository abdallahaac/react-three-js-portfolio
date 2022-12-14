import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "../Pages/Art";
import GraphicDesign from "../Pages/GraphicDesign";
import Home from "../Pages/Home";
import TechnicalProjects from "../Pages/TechnicalProjects";
import Navbar from "./Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home></Home>} />
				<Route path="/technical-projects" element={<TechnicalProjects />} />
				<Route path="/graphic-design" element={<GraphicDesign />} />
				<Route path="/art" element={<Art />} />
			</Routes>
		</>
	);
};

export default App;
