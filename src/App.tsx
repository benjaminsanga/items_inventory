import React, { useState } from 'react';
import itemsSlice, { addItem, removeItem } from './features/items-slice'
import { useAppDispatch, useAppSelector } from './features/hooks'
import './App.css';

function App() {

  const state = useAppSelector(state => state.itemSlice)
  const dispatch = useAppDispatch()

  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? setItem(e.target.value) : ''
  }

  const handleAddToStore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // check for values
    if (item.length <= 0 || quantity <= 0) return

    dispatch( addItem({
      item,
      quantity
    }) )

    setItem('')
    setQuantity(0)

  }

  const handleRemoveItem = (index: number) => {
    if (!index) return
    dispatch ( removeItem(index) )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory 🥕 </h1>
      </header>
      <main>
        <div>
          <p>keep track of your inventory with this app</p><br /><br />

          <form>
            <span>what do you need to add?</span>
            <input 
            type={'text'} 
            onChange={(e) => handleChangeItem(e)} 
            placeholder='type name of item here' 
            value={item} />

            <br /><br />

            <span>Quantity</span>
            <input type={'text'} placeholder={'quantity'} value={quantity} onChange={e=>{
              if (!typeof +e.target.value ) return
              setQuantity(+e.target.value)
              }} style={{width: '47%'}} />
            
            <button onClick={(e) => {
              e.preventDefault()
              if (quantity <= 0) return
              setQuantity( quantity - 1 )
              }} className='quantity-btn'><b style={{fontSize: '0.85rem'}}> 👎 </b> -</button>

            <button onClick={(e) => {
              e.preventDefault()
              setQuantity( quantity + 1 )
              }} className='quantity-btn'>+ <b style={{fontSize: '0.85rem'}}> 👍 </b></button>
            <br/>

            <button onClick={(e) => handleAddToStore(e)}>Add to Store</button>

          </form>
        </div>

        <div>
          <h2>Items: {state.items.length}</h2>
          {
            state.items.map( (item, index) => (
              <section key={index}>
                <p>#{index+1} - {item.item}</p>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => ''} className='small-box'>😩  -1</button>
                <button onClick={() => handleRemoveItem(index)} className='small-box danger'>Remove ❎ </button>
                <p>------------------------------------------</p>
              </section>
            ))
          }
          
        </div>
      </main>
    </div>
  );
}

export default App;

