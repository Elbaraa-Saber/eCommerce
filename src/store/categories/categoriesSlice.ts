import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./actions/actGetCategories";

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
    // here we define the action types and their corresponding action creators
    reducers: {
    },
    // here we handle the async actions
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            if(
                action.payload &&
                Array.isArray(action.payload) 
                // && action.payload.every((item: any) => item && typeof item.id === 'number' && typeof item.title ==='string' && typeof item.prefix ==='string' && typeof item.img ==='string')
            ){
                state.records = action.payload;
            }
            state.error = null;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.payload && typeof action.payload ==='string'){
                state.error = action.payload;
            }
        }) 
    }
})

export {actGetCategories};
export default categoriesSlice.reducer;