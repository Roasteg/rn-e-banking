import { configureStore } from "@reduxjs/toolkit";
import bankcardsSlice from "./slices/bankcards";

const store = configureStore({
    reducer: {
        bankCards: bankcardsSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
