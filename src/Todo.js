import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

export default function Todo({todo, removeTodo,toggleTodo, updateTodo}) {
	const [edit, toggle] = useToggleState(false);

	const handleEdit = () => {
		toggle();
	}

	return (
		<ListItem  key={todo.id} style={{height: '64px'}}>	
		{edit? <EditTodoForm id={todo.id} task={todo.task} updateTodo={updateTodo} toggleEdit={toggle} /> :
			<>
					<Checkbox tabIndex={-1} checked={todo.complete} onChange={()=>toggleTodo(todo.id)}/>
					<ListItemText style={{textDecoration: todo.complete && 'line-through'}}>
						{todo.task}						
					</ListItemText>	
					<ListItemSecondaryAction>
						<IconButton aria-label="Edit" onClick={handleEdit}><EditIcon/></IconButton>
						<IconButton aria-label="Delete" onClick={()=>removeTodo(todo.id)}><DeleteIcon/></IconButton>
					</ListItemSecondaryAction>
			</>
		}
		</ListItem>
		
	)
}
