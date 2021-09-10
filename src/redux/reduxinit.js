import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './appReducer';
import MainPageTopReducer from './mainPageTopReduser';

const rootReducer = combineReducers({
    app: AppReducer,
    mainPageTop: MainPageTopReducer,
});

const store = configureStore({reducer:rootReducer});

export default store;