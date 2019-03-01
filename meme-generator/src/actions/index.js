export const ADD_MEME = 'ADD_MEME'

export function addMeme (imgURL, topText, botText, id) {
	return {
		type: ADD_MEME, 
		imgURL,
		topText,
		botText,
		id,
	}
}