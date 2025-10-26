import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
// import authReducer from "./slices/authSlice";
import { api } from "./services";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        // auth: authReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
