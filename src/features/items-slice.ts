import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ItemsType {
    items: {item: string, quantity: number}[]
}

const initialValue: ItemsType = {
    items: []
}

export const itemSlice = createSlice({
    name: 'items',
    initialState: initialValue,
    reducers: {
        addItem(state, action: PayloadAction<{item: string, quantity: number}>) {
            state.items.push(action.payload)
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items.concat(state.items.filter((_, i) => i !== action.payload))
        }
    }
})

export const { addItem, removeItem } = itemSlice.actions

export default itemSlice.reducer
