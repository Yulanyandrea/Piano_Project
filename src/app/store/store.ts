import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import pianoKeyReducer from '../../features/piano/pianoSlice';

const store = configureStore({
    reducer:{
        pianoKeys: pianoKeyReducer

    }
    
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export type RootState = ReturnType<typeof store.getState>

export default store;