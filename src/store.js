import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { localStorageMiddleware } from './middleware'
import reducer from '@reducers'

const getMiddleware = () => {
	return applyMiddleware(localStorageMiddleware)
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))