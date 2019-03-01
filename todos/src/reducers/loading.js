import ADD_TODO from '../actions'

export default function loading(state = true, action) {
	switch(action.type) {
		case ADD_TODO: 
			return false
		default: 
			return state
	}
}