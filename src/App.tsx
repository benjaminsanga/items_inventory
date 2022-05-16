import React, { useState } from 'react';
import { addItem, removeItem } from './features/items-slice'
import { useAppDispatch, useAppSelector } from './features/hooks'
import './App.css';

function App() {

  const state = useAppSelector(state => state.itemSlice)
  const dispatch = useAppDispatch()

  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length < 0) return
    setItem(e.target.value)
  }

  const handleChangeQuantity = (count: number) => {
    if (!(typeof count === 'number' && count > -1)) return
    setQuantity(count)
  }

  const handleAddToStore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // check for values
    if (item.length <= 0 || quantity <= 0) return
    
    dispatch( addItem({
      item,
      quantity,
      date: `${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}`
    }) )

    setItem('')
    setQuantity(0)

  }

  const handleRemoveItem = (index: number) => {
    if (index < 0) return
    dispatch ( removeItem(index) )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory 🥕 </h1>
      </header>
      <main>
        <div>
          <p>Keep track of your inventory with this app, all items are on the right.</p><br /><br />

          <form>
            <span>What do you need to add?</span>
            <input 
            type={'text'} 
            onChange={(e) => handleChangeItem(e)} 
            placeholder='type name of item here' 
            value={item} />

            <br /><br />

            <span>Quantity</span>
            <input type={'text'} placeholder={'quantity'} value={quantity} onChange={e=>{ handleChangeQuantity(+e.target.value) }} className='quantity' />
            
            <button onClick={(e) => {
              e.preventDefault()
              if (quantity < 0) return
              handleChangeQuantity( quantity - 1 )
              }} className='quantity-btn'><b>🔽 </b></button>

            <button onClick={(e) => {
              e.preventDefault()
              handleChangeQuantity( quantity + 1 )
              }} className='quantity-btn'><b>🔼 </b></button>
            <br/>

            <button onClick={(e) => handleAddToStore(e)}>Add to Store</button>

          </form>
        </div>

        <div>
          <h2>Items: {state.items.length}</h2>
          {
            state.items.map( (item, index) => (
              <section key={index}>
                <p className='item-and-date'>
                  #{state.items.length-index} - {item.item} 
                  <i>{item.date}</i>
                </p>
                <span>Quantity: {item.quantity}</span>
                {/* <button onClick={() => ''} className='small-box'>😩  -1</button> */}
                <button onClick={() => handleRemoveItem(index)} className='small-box danger'>Remove ❎ </button>
                <p>----------------------------</p>
              </section>
            )).reverse()
          }
          
        </div>
      </main>
    </div>
  );
}

export default App;

