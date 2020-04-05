import React, {useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import TodoList from './TodoList.js';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';

const getTodos = (key) => {
	const storage = localStorage.getItem(key);
	if(storage) return JSON.parse(storage);
	else return [];
}

const saveTodos = (key, todos) => {
	localStorage.setItem(key, JSON.stringify(todos));
}

export default function TodoApp() {
	const initialState = getTodos('myTodos');
	// const [todos, setTodos] = useState(initialState);
	const {todos, addTodo, removeTodo, toggleTodo, updateTodo} = useTodoState(initialState);

	useEffect(() => {
		saveTodos('myTodos', todos);	
	}, [todos]);

	return (
		<Paper style={{
			padding: 0,
			margin: 0,
			height: "100vh",
			backgroundColor: '#fafafa'
		}}
		elevation={0}>
		<AppBar color='primary' position='static' style={{height: '64px'}}>
			<ToolBar>
				<Typography colour='inhreit'>
					TODOS WITH HOOKS
				</Typography>
			</ToolBar>
		</AppBar>
		<Grid container justify='center' style={{marginTop: '1rem'}}>
			<Grid item xs={11} md={8} lg={4}>
				<TodoForm addTodo={addTodo}/>
				<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} updateTodo={updateTodo}/>
			</Grid>
		</Grid>
		</Paper>
	)
}
