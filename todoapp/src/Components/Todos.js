import React from 'react';

const Todos = ({todos, deleteTodo}) => {
	const todoList = todos.length ? (
		//If true (length is not zero)
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		//If false (length is zero)
		<p className="center">You have no todo's left, yay!</p>
	);
	return <div className="todos collection">{todoList}</div>;
};
//2 conditions. One for if length of list is zero (false) or if length of zero is not zero(true)

export default Todos;
