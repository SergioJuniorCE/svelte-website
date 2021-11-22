import { writable } from 'svelte/store';

export const todos = writable([]);

const fetchTodos = () => {
	// todos.set(JSON.parse(localStorage.getItem('todos')) || []);
};
fetchTodos();
