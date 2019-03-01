import { combineReducers } from 'redux'
import goals from './goals'
import todos from './todos'

export default combineReducers({
	todos,
	goals,
})
