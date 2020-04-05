import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from './hooks/useInputState';

export default function TodoForm({addTodo}) {
	const [value, handleChange, reset] = useInputState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		reset();
	}

	return (
		<Paper style={{magrin: '1rem 0', padding: '0 1rem'}}>
			<form onSubmit={e=>handleSubmit(e)}>
				<TextField value={value} onChange={handleChange} margin='normal' label='Add new todo' fullWidth/>
			</form>
		</Paper>
	)
}
