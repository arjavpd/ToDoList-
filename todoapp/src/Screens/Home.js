import React, {Component} from 'react';
import Todos from '../Components/Todos';
import AddTodo from '../Components/AddTodo';
import axios from 'axios';

class Home extends Component {
	state = {
		todos: [
			{id: 1, content: 'buy some bananas'},
			{id: 2, content: 'play mario kart'},
		],
		posts: [],
	};
	addTodo = newTodo => {
		newTodo.id = Math.random();
		let todosCopy = [...this.state.todos, newTodo];
		this.setState({
			todos: todosCopy,
		});
	};
	deleteTodo = id => {
		const todosCopy = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos: todosCopy,
		});
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			console.log(res);
			this.setState({
				posts: res.data.slice(0, 10),
			});
		});
	}
	render() {
		const {posts} = this.state;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<span className="card-title">{post.title}</span>
							<p>{post.body}</p>
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No Posts Yet</div>
		);
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
				{postList}
			</div>
		);
	}
}

export default Home;
