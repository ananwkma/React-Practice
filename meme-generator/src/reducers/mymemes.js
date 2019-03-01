import { ADD_MEME } from '../actions'

export default function mymemes(state={}, action) {
	switch(action.type) {
		case ADD_MEME:
			const {imgURL, topText, botText, id} = action.id
			let meme = {
				imgURL: imgURL,
				topText: topText,
				botText: botText,
			}
			return {
				...state, 
				[id]: meme
			}
		default:
			return state
	}
}