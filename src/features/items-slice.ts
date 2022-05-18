import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ItemsType {
    items: {item: string, quantity: number, date: string}[]
}

const initialValue: ItemsType = {
    items: []
}

export const itemSlice = createSlice({
    name: 'items',
    initialState: initialValue,
    reducers: {
        addItem(state, action: PayloadAction<{item: string, quantity: number, date: string}>) {
            localStorage.setItem(action.payload.date, JSON.stringify(action.payload))
            state.items = [...state.items, action.payload]
        },
        removeItem(state, action: PayloadAction<number>) {
            localStorage.removeItem(state.items[action.payload].date)
            state.items = [...state.items.filter((_, i) => i !== action.payload)]
        }
    }
})

export const { addItem, removeItem } = itemSlice.actions

export default itemSlice.reducer
