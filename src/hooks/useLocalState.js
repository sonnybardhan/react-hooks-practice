import {useState, useEffect} from 'react'

export default function useLocalState(key, initialState=[]) {
	const [state, setState] = useState(() => {
		const storage = localStorage.getItem(key);
		if(storage) return JSON.parse(storage);
		return initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [state, key])

	return [state, setState];
}
