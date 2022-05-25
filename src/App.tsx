import React, { useEffect, useState } from 'react';
import { addItem, removeItem } from './features/items-slice'
import { useAppDispatch } from './features/hooks'
import './App.css';
import EntryForm from './components/EntryForm';
import ItemsList from './components/ItemsList';

function App() {

  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    for (let storageItem in localStorage) { 
      if (new Date(storageItem).toString().match(/[0-9]/g) === null) continue

      let item: { item: string, quantity: number, date: string } = JSON.parse(localStorage.getItem(storageItem) as string)
      
      dispatch(addItem({
        item: item.item,
        quantity: item.quantity,
        date: item.date
      }))
      
    }
  
  }, [])

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
      date: `${new Date().toLocaleString()}`
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
        <EntryForm item={item} 
        quantity={quantity} 
        handleChangeItem={handleChangeItem} 
        handleChangeQuantity={handleChangeQuantity} 
        handleAddToStore={handleAddToStore} />

        <ItemsList 
        handleRemoveItem={handleRemoveItem} />
      </main>
      <footer>
        <p>Created by <a href='https://twitter.com/yourfavben' target={'_blank'}>@yourfavben 😎  </a></p>
      </footer>
    </div>
  );
}

export default App;

