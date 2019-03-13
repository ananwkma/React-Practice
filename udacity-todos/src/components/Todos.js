 class Todos extends React.Component {

      addItem = (e) => {
        e.preventDefault()
        this.props.store.dispatch(handleAddTodo(
          this.input.value, 
          () => this.input.value = ''
        ))
      }

      removeItem = (todo) => {
        this.props.store.dispatch(handleRemoveTodo(todo))
      }

      toggleItem = (id) => {
        this.props.store.dispatch(toggleTodoAction(id))

        return API.saveTodoToggle(id)
          .catch(() => {
            this.props.store.dispatch(toggleTodoAction(id))
            alert('An error has occurred. Try again.')
          })
      }

      render() {
        return (
          <div>
            <h1>Todos List</h1>
            <input
              type="text"
              placeholder="Add Todo"
              ref={(input) => this.input = input}
            />

            <button onClick={this.addItem}>Add Todo</button>

            <List 
              items={this.props.todos}
              remove={this.removeItem}
              toggle={this.toggleItem}
            />
          </div>
        )
      }
    }

export default Todos