import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Todos extends Component {

	state = {
		title: ""
	}

	handleChange = (e) => {
		this.setState({ title: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const todoId = Date.now()
		const { title } = this.state
		const userId = 1

		this.props.dispatch(addTodo(
			userId, todoId, title,
		))
		document.getElementById("todoForm").reset()
	}

	renderTodos = () => {
		const { todos } = this.props
		const todosArr = Object.values(todos)

		return (
			todosArr.map(todo => (
				<ul key={todo.id}> 
					<li> user: {todo.userId} </li>
					<li> todo: {todo.title} </li>
					<li> id: {todo.id} </li>
				</ul>
			))
		)
	}

	render () {	
		if (this.props.loading) {
			return (
				<h1> Loading </h1>
			)
		}
		return (
			<div>
				<h1> TODO LIST </h1> 
				<form onSubmit={this.handleSubmit} id="todoForm"> 
					<input type="text" placeholder="todo" onChange={this.handleChange}/>
					<button type="submit"> Submit </button>
				</form>
				{this.renderTodos()}
			</div>
		)
	}
}

export default connect((state) => ({
	todos: state.todos, 
	loading: state.loading
}))(Todos)