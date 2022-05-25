import {createStore, applyMiddleware} from 'redux'
import { RootReducer } from '../store/reducers/RootReducer';
import thunk from 'redux-thunk'


const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;