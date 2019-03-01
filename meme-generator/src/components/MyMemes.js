import React from 'react'
import { connect } from 'react-redux'

class MyMemes extends React.Component {

	renderMemes = (memes) => {
		let mymemes = Object.entries(memes)
		return (
			<div>
				{mymemes.map(meme => (
					<ul key={meme[0]}>
						<li> {meme[1].imgURL} </li>
						<li> {meme[1].topText} </li>
						<li> {meme[1].botText} </li>
					</ul>
				))}
			</div>
		)
	}

	render() {
		const { mymemes } = this.props
		return (
			<div>
				{this.renderMemes(mymemes)}
			</div>
		)
	}
}

export default connect(state => ({
	mymemes: state.mymemes
}))(MyMemes)