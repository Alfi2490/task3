import { createSlice } from '@reduxjs/toolkit';

export const initState ={
    Country: '',
    Dates: { From: '', To: ''},
    Days: '',
    ID: '',
    Image: '',
    Language: '',
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

        setEvent: (state, {payload}) => {
            if (payload === 'nope') {
                state.Country = '';
                state.Dates = {From: '', To: ''};
                state.Days = '';
                state.ID = '';
                state.Image = '';
                state.Language = '';
                state.Nights = '';
                state.Price = '';
                state.Title = '';
                state.Transfer = false;
                state.Type = '';
                state.Way = '';
                return
            }
            state.Country = payload.Country;
            state.Dates = payload.Dates;
            state.Days = payload.Days;
            state.ID = payload.ID;
            state.Image = payload.Image;
            state.Language = payload.Language;
            state.Nights = payload.Nights;
            state.Price = payload.Price;
            state.Title = payload.Title;
            state.Transfer = payload.Transfer;
            state.Type = payload.Type;
            state.Way = payload.Way;
        }

    }
});

export const {
    setEvent
} = slice.actions;

export const adminSelector = state => state.admin;

export default slice.reducer;

// ---------------Actions-----------------

