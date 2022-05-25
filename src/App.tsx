import React, { useEffect, useState } from 'react';
import { addItem, removeItem } from './features/items-slice'
import { useAppDispatch } from './features/hooks'
import './App.css';
import EntryForm from './components/EntryForm';
import ItemsList from './components/ItemsList';

function App() {

  const [item, setItem] = useState('') // form item hook 
  const [quantity, setQuantity] = useState(0) // form item quantity hook
  const dispatch = useAppDispatch() // hook for dispatching actions to store

  // hook to sync locally store items with redux store
  useEffect(() => {
    for (let storageItemKey in localStorage) { // get each item key in localstorage

      // use the item key to check for valid date
      // using the regex for numbers technique
      if (new Date(storageItemKey).toString().match(/[0-9]/g) === null) continue

      // get item object from the stored value
      let item: { item: string, quantity: number, date: string } = JSON.parse(localStorage.getItem(storageItemKey) as string)
      
      // add item to store using dispatch and additem action
      dispatch(addItem({
        item: item.item,
        quantity: item.quantity,
        date: item.date
      }))
      
    }
  
  }, [])

  const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    // check that field is not empty
    if (e.currentTarget.value.length < 0) return
    setItem(e.target.value)
  }

  const handleChangeQuantity = (count: number) => {
    // check field value type and count value
    if (!(typeof count === 'number' && count > -1)) return
    setQuantity(count)
  }

  const handleAddToStore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // check for validation
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
    // check for valid index number
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

        <ItemsList handleRemoveItem={handleRemoveItem} />
      </main>
      <footer>
        <p>Crafted by <a href='https://twitter.com/yourfavben' target={'_blank'}>@yourfavben 😎  </a></p>
      </footer>
    </div>
  );
}

export default App;

