import React from 'react';
import Rainbow from '../Components/hoc/Rainbow';

const About = props => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>This is the About page</p>
		</div>
	);
};

export default Rainbow(About);
