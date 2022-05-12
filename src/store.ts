import { createSlice, configureStore } from '@reduxjs/toolkit'

const itemSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        decrement: state => {
            state.value -= 1
        },
        increment: state => {
            state.value += 1
        }
    }
})

export const { decrement, increment } = itemSlice.actions

export const store = configureStore({
    reducer: itemSlice.reducer
})

export default itemSlice.reducer

store.subscribe(() => console.log(store.getState()))
