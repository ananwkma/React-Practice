import checker from './checker'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
	checker,
)