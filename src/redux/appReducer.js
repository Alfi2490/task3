import { createSlice } from '@reduxjs/toolkit';
import getEvents from '../firebase/api-initial';

export const initState ={
    condition: 'MainPage',
    error: '',
    events: [],
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
        }

    }
});

export const {
    changeCondition,
    setError,
    clearError,
    setEvents
} = slice.actions;

export const appSelector = state => state.app;

export default slice.reducer;

// const events = getEvents();
// events.then(res => setEvents(res)).catch(err => setError(err));


// ---------------Actions-----------------

export function getEventsAction() {
    return async dispatch => {
        dispatch(clearError());
        const events = await getEvents();
        dispatch(setEvents(events));
    }
}
