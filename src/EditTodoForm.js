import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
// import useToggleState from './hooks/useToggleState';

export default function EditTodoForm({id, task, updateTodo, toggleEdit}) {
	// const [currentTask, updateTask] = useState(task);
	const [value, handleChange] = useInputState(task);
	// console.log(toggleTodo);
	return (
		<form style={{margin: '1rem'}} onSubmit={(e) => {
			e.preventDefault();
			updateTodo(id, value);
			toggleEdit();
			}}>
			<TextField margin="normal" value={value} onChange={e=>handleChange(e)} fullWidth autoFocus/>
		</form>
	)
}
