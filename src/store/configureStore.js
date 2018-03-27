import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
	// we can configure devtools, more than one middleware,hotrealoading
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxInmutableStateInvariant())
	);
}