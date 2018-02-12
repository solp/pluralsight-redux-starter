import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState){
	// we can configure devtools, more than one middleware,hotrealoading
	return createStore(
		rootReducer,
		initialState,
		applyMiddleWare(reduxInmutableStateInvarian())
	);
}