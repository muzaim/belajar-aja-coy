import { Todo } from "./type";

export const fetchTodos = async (): Promise<Todo[]> => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json();

	return data;
};
