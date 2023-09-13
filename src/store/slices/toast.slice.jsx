import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: null,
    reducers: {
        setToast : (state, action) => {
            return action.payload
        }
    }
})

export const { setToast } = toastSlice.actions;

export default toastSlice.reducer;



export const toast = (message, type="success") => (dispatch) => {
    const data ={
        message,
        type : `toast--${type.trim()}`
    }
    dispatch(setToast(data))

    setTimeout(() => {
        dispatch(setToast(null))
    }, 5000);
}
