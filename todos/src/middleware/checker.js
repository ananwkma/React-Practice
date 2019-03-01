import { ADD_TODO } from '../actions'

const checker = (state) => (next) => (action) => {
	if (action.type === ADD_TODO) {
		if (action.title.toLowerCase().includes('fish')) {
			return alert("Your fish is dead")
		}
	}
	return next(action)
}

export default checker