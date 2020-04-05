import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

export default function TodoList({todos, removeTodo, toggleTodo, updateTodo}) {
	
	return (
		todos.length ?
		<Paper>
			<List>
			{todos.map((todo, i) => (
				<div key={Math.random()}>
					<Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} updateTodo={updateTodo}/>
					{i < todos.length-1 && <Divider />} 
				</div>
			))}
			</List>
		</Paper>
		: ''
	);
}
