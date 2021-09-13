import { createSlice } from '@reduxjs/toolkit';

export const initState ={
    Country: '',
    Dates: { From: '', To: ''},
    Days: '',
    ID: '',
    Image: '',
    Language: 'Russian',
    Nights: '',
    Price: '',
    Title: '',
    Transfer: false,
    Type: '',
    Way: ''

};

const slice = createSlice({
    name:'admin',
    initialState: initState,
    reducers: {

        setState: (state, {payload}) => {
            state = payload;
        }

    }
});

export const {
    setState
} = slice.actions;

export const adminSelector = state => state.admin;

export default slice.reducer;

// ---------------Actions-----------------

