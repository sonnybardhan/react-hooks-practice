import React, {useState} from 'react'

export default function useTodoState(initialState) {
	const [todos, setTodos] = useState(initialState);

	return {
		todos,
		addTodo: (text) => {
			setTodos([ {id: Math.random(), task: text, completed: false}, ...todos]);
		},
		removeTodo:  (id) => {
			const remainingTodos = todos.filter(todo => todo.id!==id);
			setTodos([ ... remainingTodos]);
		},
		toggleTodo: id => {
			setTodos([...todos.map(todo => todo.id===id ?
					{...todo, complete: !todo.complete} : todo
			)]);
		},
		updateTodo: (id, editedTask) => {
			setTodos([...todos.map(todo => todo.id===id ?
					{...todo, task: editedTask} : todo
			)]);
		}
	}
}
