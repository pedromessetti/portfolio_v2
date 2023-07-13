import React from 'react';

//React Router DOM imports
import { BrowserRouter as Router } from 'react-router-dom';

//Components import
import Header from 'components/Header';

//Pages import
import Home from 'pages/Home';
import AboutMe from 'pages/AboutMe';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Footer from 'components/Footer';

export default function AppRouter() {
	return (
		<Router>
			<Header />
			<main className='container'>
				<Home />
				<AboutMe />
				<Projects />
				<Skills />
			</main>
			<Footer />
		</Router>
	);
}
