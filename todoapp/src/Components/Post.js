import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Post = props => {
	let {post_id} = useParams();

	return (
		<div className="container">
			<h4 className="center">Post {post_id}</h4>
		</div>
	);
};

export default Post;
