import { writable } from 'svelte/store'
import { variables } from '$lib/variables'

export const todos = writable([]);

const fetchTodos = async() => {
    const url = `${variables.API_URL}/todos/`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        todos.set(data);
    } catch (error) {
        todos.set({})
    }
};

fetchTodos();