import { configureStore } from "@reduxjs/toolkit"
import { itemSlice } from "./items-slice"
import { quantitySlice } from './quantity-slice'

export const store = configureStore({
    reducer: {
        quantitySlice: quantitySlice.reducer,
        itemSlice: itemSlice.reducer
    }
})

