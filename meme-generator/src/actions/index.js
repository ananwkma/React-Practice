export const ADD_MEME = 'ADD_MEME'

export function addMeme (id, imgURL, topText, botText) {
	return {
		type: ADD_MEME, 
		id,
		imgURL,
		topText,
		botText,
	}
}