import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      	<Router> 
	        <Header />
        </Router>
      </div>
    );
  }
}

export default App
