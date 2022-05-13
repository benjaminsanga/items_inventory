import { createSlice } from '@reduxjs/toolkit'

export const quantitySlice = createSlice({
    name: 'counter',
    initialState: {
        item: '',
        quantity: 0,
    },
    reducers: {
        setItem: (state, action) => {
            state.item = state.item + action.payload
        },
        decrementInputQuantity: state => {
            state.quantity--
        },
        incrementInputQuantity: state => {
            state.quantity++
        }
    }
})

export const { setItem, decrementInputQuantity, incrementInputQuantity } = quantitySlice.actions
