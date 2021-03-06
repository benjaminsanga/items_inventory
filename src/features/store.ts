import { configureStore } from "@reduxjs/toolkit"
import { itemSlice } from "./items-slice"

export const store = configureStore({
    reducer: {
        itemSlice: itemSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
