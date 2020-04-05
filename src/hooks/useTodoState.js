// import React, {useState} from 'react'
import useLocalState from './useLocalState';

export default function useTodoState(key) {
// export default function useTodoState(initialState) {
	// const [todos, setTodos] = useState(initialState);
	const [todos, setTodos] = useLocalState(key);

	return {
		todos,
		addTodo: (text) => {
			setTodos([ {id: Math.random(), task: text, completed: false}, ...todos]);
		},
		removeTodo: (id) => {
			const remainingTodos = todos.filter(todo => todo.id!==id);
			setTodos([...remainingTodos]);
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
