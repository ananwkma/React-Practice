import React, { Component } from 'react';
import '../App.css';

class App extends React.Component {

  componentDidMount () {
    const { store } = this.props
    store.dispatch(handleInitialData())
    store.subscribe(() => this.forceUpdate())
  }

  render () {
    const { store } = this.props
    const { todos, goals, loading } = store.getState()

    if (loading) {
      return <h3> Loading.. </h3>
    }
    return (
      <div> 
        <Todos todos={todos} store={this.props.store}/>
        <Goals goals={goals} store={this.props.store}/>
      </div>
    )
  }
} 

export default App;
