import { createSlice } from '@reduxjs/toolkit';

export const initState ={
    Country: 'Country',
    Type: 'Type',
    dates: {From: '', To: ''},
    condition: '',
};

const slice = createSlice({
    name: 'mainPageTop',
    initialState: initState,
    reducers: {

        setCountry: (state, {payload}) => {
            state.Country = payload;
        },

        setType: (state, {payload}) => {
            state.Type = payload;
        },

        setDates: (state, {payload}) => {
            state.dates = payload;
        },

        setCondition: (state, {payload}) => {
            state.condition = payload;
        },

    }
})

export const {
    setCountry,
    setType,
    setDates,
    setCondition,
} = slice.actions;

export const mainPageTopSelector = state => state.mainPageTop;

export default slice.reducer;