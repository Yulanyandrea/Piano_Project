import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllInstruments } from './pianoApi';

const initialState = {
    bankSound:[],
    status:'idle'
}

export const getInstruments = createAsyncThunk('instruments/data', async()=> {
    const res = await getAllInstruments();
    return res
})

const pianoKeyReducer = createSlice({
    name:'piano',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        //get instruments from DB
        .addCase(getInstruments.pending,(state)=>{
            state.status ='loading';
        })

        .addCase(getInstruments.fulfilled,(state,action)=>{
            state.bankSound =action.payload;
        })

        .addCase(getInstruments.rejected,(state)=>{
            state.status ='rejected';
        })

        
    }
})

export default pianoKeyReducer.reducer