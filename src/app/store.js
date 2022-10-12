import { configureStore} from '@reduxjs/toolkit';
import  schoolReducer  from '../features/school/schoolSlice'

export const store = configureStore({
    reducer:{
        school: schoolReducer,
    },
});

