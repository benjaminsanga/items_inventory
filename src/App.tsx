// import React from 'react';
import React, { useState } from 'react';
import { store } from './features/store';
import { setItem, decrementInputQuantity, incrementInputQuantity } from './features/quantity-slice'
import './App.css';

function App() {
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? store.dispatch ( setItem(e.target.value) ) : ''
  }

  const handleAddToStore = () => {

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
            value={store.getState().quantitySlice.item} />

            <br /><br />

            <span>Quantity</span>
            <input type={'text'} placeholder={'quantity'} value={store.getState().quantitySlice.quantity} onChange={()=>''} style={{width: '47%'}} />
            
            <button onClick={(e) => {
              e.preventDefault()
              if (store.getState().quantitySlice.quantity <= 0) return
              store.dispatch( decrementInputQuantity() )
              }} className='quantity-btn'><b style={{fontSize: '0.85rem'}}> 👎 </b> -</button>

            <button onClick={(e) => {
              e.preventDefault()
              store.dispatch( incrementInputQuantity() )
              }} className='quantity-btn'>+ <b style={{fontSize: '0.85rem'}}> 👍 </b></button>
            <br/>

            <button onClick={() => handleAddToStore()}>Add to Store</button>

          </form>
        </div>

        <div>
          <section>
            <h2>Items</h2>
            <p>#1 - Item</p>
            <span>Quantity: {0}</span>
            <button onClick={() => ''} className='small-box'>😩  -1</button>
            <button onClick={() => ''} className='small-box danger'>Remove ❎ </button>
            <p>------------------------------------------</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

