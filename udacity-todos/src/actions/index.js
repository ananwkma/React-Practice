const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'
const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo (name)
      .then((todo) => {
        dispatch(addTodoAction(todo)),
        cb()
      })
      .catch(() => {
        alert('An error has occurred. Try again.')
      })
  }
}

export function handleRemoveTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodoAction(todo.id))

    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodoAction(todo))
        alert('An error has occurred. Try again.')
      })
  }
}

export function handleAddGoal(name, cb) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoalAction(goal))
        cb()
      })
      .catch(() => {
        alert('An error has occurred. Try again.')
      })
  }
}

export function handleRemoveGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id))
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoalAction(goal))
        alert('An error has occurred. Try again.')
      })
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([ todos, goals ]) => {
      dispatch(receiveDataAction(todos, goals))
    })
  }
}

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

function receiveDataAction (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals, 
  }
}