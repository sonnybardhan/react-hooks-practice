import React, {useState} from 'react'

export default function(initialState) {
	const [state, setState] = useState(initialState);
	
	const toggle = () => {
		setState(!state);
	}

	return [state, toggle];
}
