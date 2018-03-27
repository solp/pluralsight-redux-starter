import {combineReducers} from 'redux';
import products from './products/productReducer';

const rootReducer = combineReducers({
	products
});

export default rootReducer;