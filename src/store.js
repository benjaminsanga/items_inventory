import { createSlice, configureStore } from '@reduxjs/toolkit'

const itemSlice = createSlice({
    name: '',
    initialState: {
        value: 0,
    },
    reducers: {
        decrement: state => {
            return state .value -= 1
        },
        increment: state => {
            return state.value += 1
        }
    }
})

export const { decrement, increment } = itemSlice.actions

export const store = configureStore({
    reducer: itemSlice.reducer
})

// store.subscribe(() => console.log(store.getState()))
