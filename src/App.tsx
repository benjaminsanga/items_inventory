// import React from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState('')
  
  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value.length > 0 ? setItem(e.target.value) : ''
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory</h1>
      </header>
      <main>
        <p>keep track of your inventory with this app</p>
        <span>what do you need to add?</span>

        <form>
          <input 
          type={'text'} 
          onChange={(e) => handleChangeItem(e)} 
          placeholder='type what you want to add' 
          value={item} />
          <button>Add</button>
        </form>
      </main>
    </div>
  );
}

export default App;
