import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem(state, payload) {
            [...state, payload]
        },
        removeItem(state, index) {
            state.filter((_, i) => i !== index.payload)
        }
    }
})
