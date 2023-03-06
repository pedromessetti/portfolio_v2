import Header from 'components/Header';
import AboutMe from 'pages/AboutMe';
import Home from 'pages/Home';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function AppRouter() {
	return (
		<Router>
			<Header />
			<main className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutMe />} />
				</Routes>
			</main>
		</Router>
	);
}
