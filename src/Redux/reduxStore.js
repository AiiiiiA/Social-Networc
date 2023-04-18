import { combineReducers, legacy_createStore, legacy_createStore as createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer'
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

import { compose } from 'redux';

let reducers = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    user: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
/* 
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware)); */


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store;