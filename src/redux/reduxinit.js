import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './appReducer';
import MainPageTopReducer from './mainPageTopReduser';
import AdminReducer from './adminReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    mainPageTop: MainPageTopReducer,
    admin: AdminReducer
});

const store = configureStore({reducer:rootReducer});

export default store;