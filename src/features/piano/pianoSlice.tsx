import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import { getAllInstruments } from './pianoApi';
import { RootState } from '../../app/store/store';

interface Instruments {
    id: String,
    note: String,
    frequency:Number
}

export interface InstrumentState{
    bankSound:Array<Instruments>
}
const initialState = {
    bankSound:[],
    status:'idle'
}

export const getInstruments = createAsyncThunk('instruments/data', async()=> {
    const res = await getAllInstruments();
    return res
})

const pianoKeyReducer = createSlice({
    name: 'piano',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getInstruments.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getInstruments.fulfilled, (state, action) => {
          state.bankSound = action.payload; 
          state.status = 'succeeded'; 
        })
        .addCase(getInstruments.rejected, (state) => {
          state.status = 'failed'; 
        });
    },
  });
export const userSelector = (state: RootState) => state.pianoKeys;

export default pianoKeyReducer.reducer