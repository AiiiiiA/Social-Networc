import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer'
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';
import { compose } from 'redux';

let rootReducers = combineReducers({
  profile: profileReducer,
  message: messageReducer,
  user: userReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});

export type RootReducers = typeof rootReducers

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store;