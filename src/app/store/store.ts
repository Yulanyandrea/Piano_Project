import { configureStore } from '@reduxjs/toolkit';
import pianoKeyReducer from '../../features/piano/pianoSlice';

const store = configureStore({
    reducer:{
        pianoKeys:pianoKeyReducer

    }
    
})

export default store;