import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes></Routes>
			</div>
		</Router>
	);
}

export default App;
