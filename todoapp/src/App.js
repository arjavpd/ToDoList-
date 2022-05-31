import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, UseParam} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';
import Post from './Components/Post';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/posts/:post_id" element={<Post />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
