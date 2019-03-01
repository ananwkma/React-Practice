import React, { Component } from 'react';
import './App.css';
import Todos from './Todos'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(result => result.json())
      .then(result => result.map(todo => {
        const {userId, id, title} = todo
        if (userId === 1) {
          this.props.dispatch(addTodo(userId, id, title))
        }
      }))
  }

  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default connect (state => ({
  todos: state.todos
}))(App);
