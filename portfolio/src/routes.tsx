import React from 'react';

//React Router DOM imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components import
import Header from 'components/Header';

//Pages import
import Home from 'pages/Home';
import AboutMe from 'pages/AboutMe';
import Skills from 'pages/Skills';
import MyProjects from 'pages/MyProjects';
import Footer from 'components/Footer';

export default function AppRouter() {
	return (
		<Router>
			<Header />
			<main className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<MyProjects />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}
