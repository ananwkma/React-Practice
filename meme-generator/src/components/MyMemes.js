import React from 'react'
import { connect } from 'react-redux'

class MyMemes extends React.Component {

	renderMemes = (memes) => {
		let mymemes = Object.values(memes)
		return (
			<div>
				{mymemes.map(id => (
					<ul>
						<li> {id.imgURL} </li>
						<li> {id.topText} </li>
						<li> {id.botText} </li>
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