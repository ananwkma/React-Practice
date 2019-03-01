import { ADD_TODO } from '../actions'

export default function todos(state = {}, action) {
	switch(action.type) {
		case ADD_TODO:
			const {id, userId, title} = action
			let todo = {
				userId: userId,
				title: title,
				id: id,
			}
			return {
				...state,
				[id]: todo 
			}
		default: 
			return state
	}
}