import { createSlice } from '@reduxjs/toolkit';
import getEvents from '../firebase/api-initial';

export const initState ={
    condition: 'MainPage',
    error: '',
    events: [],
    filter: {},
};

const slice = createSlice({
    name:'app',
    initialState: initState,
    reducers: {

        changeCondition: (state, {payload}) => {
            state.condition = payload;
        },

        setError: (state, {payload}) => {
            state.error = payload;
        },

        clearError: state => {
            state.error = '';
        },

        setEvents: (state, {payload}) => {
            state.events = payload;
        },

        setFilterRedux: (state, {payload}) => {
            state.filter = payload;
        }

    }
});

export const {
    changeCondition,
    setError,
    clearError,
    setEvents,
    setFilterRedux
} = slice.actions;

export const appSelector = state => state.app;

export default slice.reducer;

// ---------------Actions-----------------

export function getEventsAction() {
    return async dispatch => {
        dispatch(clearError());
        const events = await getEvents();
        dispatch(setEvents(events));
    }
}
