import React from 'react';

const Navbar = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">ToDo List</a>
				<ul className="right">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
