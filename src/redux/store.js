import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productReducer } from './reducers/productReducer';
import { sidebarReducer } from './reducers/sidebarReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
