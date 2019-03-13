import React from 'react'
import { Link, Route } from 'react-router-dom'
import MyMemes from './MyMemes'
import MemeGenerator from './MemeGenerator'

function Header() {
	return (
		<div> 
			<header className="header"> 
				<img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?"/>
				<Link to='/' className="homelink"> Meme Generator </Link>
				<Link to='/mymemes' className="mymemes"> 
					My Memes 
				</Link>
			</header>
			<Route exact path='/' component={MemeGenerator}/>
			<Route path='/mymemes' component={MyMemes}/>
		</div>
	)
}

export default Header