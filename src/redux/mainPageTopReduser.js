import { createSlice } from '@reduxjs/toolkit';

export const initState ={
    Country: 'Country',
    Type: 'Type',
    dateFrom: new Date().toString(),
    dateTo: new Date().toString(),
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

        setDateFrom: (state, {payload}) => {
            state.dateFrom = payload;
        },

        setDateTo: (state, {payload}) => {
            state.dateTo = payload;
        },

        setCondition: (state, {payload}) => {
            state.condition = payload;
        },

    }
})

export const {
    setCountry,
    setType,
    setDateFrom,
    setDateTo,
    setCondition,
} = slice.actions;

export const mainPageTopSelector = state => state.mainPageTop;

export default slice.reducer;