import { createSlice } from '@reduxjs/toolkit';
import getEvents from '../firebase/api-initial';

export const initState ={
    condition: 'MainPage',
    error: '',
    events: [],
    countries: [],
    types: []
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
            let countries = [];
            let types = [];
            payload.forEach(event => {

                if(countries.indexOf(event.Country) === -1){
                    countries.push(event.Country);
                }
                
                if(types.indexOf(event.Type) === -1){
                    types.push(event.Type);
                }
                
            });
            state.countries = countries;
            state.types = types;

        },

        setFilterRedux: (state, {payload}) => {
            state.filter = payload;
        },

    }
});

export const {
    changeCondition,
    setError,
    clearError,
    setEvents,
    setFilterRedux,
    setCountries,
    setTypes
} = slice.actions;

export const appSelector = state => state.app;

export default slice.reducer;

// ---------------Actions-----------------

export function getEventsAction() {
    return async dispatch => {
        dispatch(clearError());
        try{
            const events = await getEvents();
            dispatch(setEvents(events)); 
        } catch (error) {
            dispatch(setError(error));
        }
        
    }
}
