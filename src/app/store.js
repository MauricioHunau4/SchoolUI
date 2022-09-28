import { configureStore} from '@reduxjs/toolkit';
import { api } from '../features/school/createApi'
import  schoolReducer  from '../features/school/schoolSlice'

export const store = configureStore({
    reducer:{
        school: schoolReducer,
        //[api.reducerPath] :api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(api.middleware)
});

