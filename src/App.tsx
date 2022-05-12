// import React from 'react';
import React, { useState } from 'react';
import { store } from './store';
import { decrement, increment } from './store'
import './App.css';

function App() {

  const [item, setItem] = useState('')
  const state = store.getState();
  
  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? setItem(e.target.value) : ''
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory</h1>
      </header>
      <main>
        <p>keep track of your inventory with this app</p><br /><br />
        <span>what do you need to add?</span>

        <form>
          <input 
          type={'text'} 
          onChange={(e) => handleChangeItem(e)} 
          placeholder='type name of item here' 
          value={item} />
          <br />
          <input type={'text'} placeholder={'quantity'} />
          <button onClick={(e) => e.preventDefault()}>-</button>
          <button onClick={(e) => e.preventDefault()}>+</button>
          <br/>
          <button>Add to Store</button>
        </form>

        <section>
          <h2>Items</h2>
          <p>#1 - Item</p>
          <span>Quantity: {state.value}</span>
          <button onClick={() => store.dispatch( decrement() )} className='small-box'>-1</button>
          <button onClick={() => increment()} className='small-box danger'>Remove</button>
        </section>
        <p>------------------------------------------</p>
        <section>
          <h2>Items</h2>
          <p>#1 - Item</p>
          <span>Quantity: {state.value}</span>
          <button onClick={() => store.dispatch( decrement() )} className='small-box'>-1</button>
          <button onClick={() => increment()} className='small-box danger'>Remove</button>
        </section>
      </main>
    </div>
  );
}

export default App;

