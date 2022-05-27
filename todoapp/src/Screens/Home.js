import React, {Component} from 'react';
import Todos from '../Components/Todos';
import AddTodo from '../Components/AddTodo';

class Home extends Component {
	state = {
		todos: [
			{id: 1, content: 'buy some bananas'},
			{id: 2, content: 'play mario kart'},
		],
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
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default Home;
