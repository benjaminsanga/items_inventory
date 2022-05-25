import React from 'react'
import { useAppSelector } from '../features/hooks'

interface ItemsListType {
    handleRemoveItem: (index: number) => void
}

const ItemsList = ({handleRemoveItem}: ItemsListType) => {

    const state = useAppSelector(state => state.itemSlice)

    return (
        <>
        <div>
            <h2>Items: {state.items.length}</h2>
            {
            state.items.map( (item, index) => (
                <section key={index}>
                <p className='item-and-date'>
                    #{state.items.length - index} - {item.item} 
                    <i>{item.date}</i>
                </p>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => handleRemoveItem(index)} className='small-box danger'>Remove ❎ </button>
                <p>----------------------------</p>
                </section>
            )).reverse()
            }
            
        </div>
        </>
    )
}

export default ItemsList