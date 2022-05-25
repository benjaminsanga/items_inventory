import React, {useRef} from 'react'

interface EntryFormType {
    item: string,
    quantity: number,
    handleChangeItem: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeQuantity: (count: number) => void,
    handleAddToStore: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const EntryForm = ({item, quantity, handleChangeItem, handleChangeQuantity, handleAddToStore}: EntryFormType) => {

    const itemInputRef = useRef<HTMLInputElement | null>(null)
  
    return (
    <>
    <div>
        <p>This app keeps track of your inventory - home, shop, office.</p><br /><br />

        <form>
        <span>What do you need to add?</span>
        <input 
        type={'text'} 
        onChange={(e) => handleChangeItem(e)} 
        placeholder='Type name of item here...' 
        value={item} 
        autoFocus 
        ref={itemInputRef} />

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
    </>
  )
}

export default EntryForm