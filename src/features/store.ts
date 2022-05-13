import { configureStore } from "@reduxjs/toolkit"
import { quantitySlice } from './quantity-slice'

export const store = configureStore({
    reducer: quantitySlice.reducer
})

