import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  //import thunk from 'redux-thunk';-> 오류 발생
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
