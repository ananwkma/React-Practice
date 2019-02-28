import React, { Component } from 'react'

class MemeGenerator extends Component {
	
	state = {
		imgURL: "http://i.imgflip.com/1bij.jpg",
		topText: "",
		botText: "",
		memeArray: [],
	}

	componentDidMount = () => {
		fetch("https://api.imgflip.com/get_memes")
			.then(result => result.json(result))
			.then(result => {
				this.setState({
					memeArray: result.data.memes
				})
			})
	}

	handleChange = (e) => {
		let {name, value} = e.target
		this.setState({
			[name]: value
		})
	}

	randomPicture = (e) => {
		e.preventDefault()
		let idx = Math.floor(Math.random() * 100)
		this.setState({
			imgURL: this.state.memeArray[idx].url
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

  render() {
    return (
      <div>
      	<form className="meme-form" onSubmit={this.handleSubmit}>
      		<input name="topText" placeholder="top text" value={this.state.topText} onChange={this.handleChange}/> 
      		<input name="botText" placeholder="bottom text" value={this.state.botText} onChange={this.handleChange}/>
      		<button onClick={this.randomPicture}> Generate </button>
      		<button type="submit"> Submit </button>
      	</form>
      	<div className="meme">
	      	<img src={this.state.imgURL} alt="meme"/>
	      	<h2 className="top"> {this.state.topText} </h2>
	      	<h2 className="bottom"> {this.state.botText} </h2>
	      </div>
      </div>
    )
  }
}

export default MemeGenerator 