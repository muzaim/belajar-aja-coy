import { Todos } from "./type";

export const fetchTodos = async (): Promise<Todos[]> => {
	const result = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await result.json();

	return data;
};
