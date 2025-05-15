import { createSlice } from "@reduxjs/toolkit";

// this is the state interface for the categories slice of the Redux store.
interface ICategoriesState {
    records: {id: number, title: string, prefix: string, img: string}[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
};

// Define the slice
const initialState: ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};

// Define the action creators for the slice
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    }
})

export default categoriesSlice.reducer;