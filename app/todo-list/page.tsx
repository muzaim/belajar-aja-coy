import React, { useEffect, useState } from "react";
import { Todos } from "../lib-todos/type";
import { fetchTodos } from "../lib/api";

const TodoList = () => {
	const [todos, setTodos] = useState<Todos[]>([]);

	useEffect(() => {
		const getTodos = async () => {
			const data = await fetchTodos();
			setTodos(data);
		};
		getTodos();
	}, []);

	return (
		<div>
			{todos.map((todo, i) => {
				return <div key={i}>{todo.title}</div>;
			})}
		</div>
	);
};

export default TodoList;
