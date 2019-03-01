export const ADD_TODO = 'ADD_TODO'

export function addTodo (userId, id, title) {
	return {
		type: ADD_TODO,
		userId,
		id,
		title,
	}
}