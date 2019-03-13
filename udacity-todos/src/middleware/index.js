const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert("Nope. That's a bad idea")
  }
  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert("Nope. That's a bad idea")
  }
  return next(action)
}

const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log("The action: ", action)
    const result = next(action)
    console.log("The new state is: ", store.getState())
  console.groupEnd()
}