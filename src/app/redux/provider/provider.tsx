"use client"

import { Provider } from 'react-redux';
import store from '../store/store';
import Piano from '@/pages/instruments/piano';
import Home from '@/app/page';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <Provider store={store}>{children}
            <Piano/>
        
        </Provider>
    )
}

export default Providers;