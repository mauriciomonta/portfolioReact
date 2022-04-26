import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About';
import Projects from './components/Projects';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}
