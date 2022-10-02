import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
    products: cartReducer,
    orders: ordersReducer
})