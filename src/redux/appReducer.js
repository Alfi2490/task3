import {createSlice} from '@reduxjs/toolkit';

export const initState ={
    condition: 'MainPage'
};

const slice = createSlice({
    name:'app',
    initialState: initState,
    reducers: {
        changeCondition: (state, {payload}) => {
            state.condition = payload
        }
    }
});

export const {
    changeCondition
} = slice.actions;

export const appSelector = state => state.app;

export default slice.reducer;

