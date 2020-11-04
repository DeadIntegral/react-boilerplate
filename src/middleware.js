import {
	SET_NUMBER
} from './actions/actionTypes'

const localStorageMiddleware = sotre => next => action => {
	if(action.type === SET_NUMBER) {
		if(!action.error) {
			// console.log(action)
		}
	}
	next(action)
}

export {
	localStorageMiddleware
}