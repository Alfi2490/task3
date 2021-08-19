import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './appReducer';

const rootReducer = combineReducers({
    app: AppReducer
});

const store = configureStore({reducer:rootReducer});

export default store;