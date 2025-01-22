// import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

//configStore = () => applyMiddleware(thunk)(createStore)(rootReducer);
const configStore = () => configureStore({
    reducer: rootReducer,
    middleware: [thunk]
  });

export default configStore;