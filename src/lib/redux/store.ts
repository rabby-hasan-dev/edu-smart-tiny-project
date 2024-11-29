
import { configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer, persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import authReducer from './features/auth/AuthSlice'
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage';
import sidebarReducer from "./features/DashboardSlice";
import passwordReducer from "./features/PassWordSlice";

const persitConfig = {
    key: 'root',
    storage,
}

const persistedAuthReducer = persistReducer(persitConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        sidebar: sidebarReducer,
        password: passwordReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware({
        serializableCheck: {
            ignoredActions
                : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(baseApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);