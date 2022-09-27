import React from 'react';

export function ShoppingItem(props) {
    const { shoppingItem, deleteItem, decreaseQuantity, increaseQuantity} = props

    const handleDelete = () => {
        deleteItem(shoppingItem.name)
    }

    const handleDecrease = () => {
      decreaseQuantity(shoppingItem.name)
    }

    const handleIncrease = () => {
      increaseQuantity(shoppingItem.name)
    }

    return (
        <li className="shoppingItem">
          <p className="shoppingText">{shoppingItem.name}</p> 
          <p className="shoppingText">{shoppingItem.quantity}</p>
          <button className="amendButton" aria-label="Increase quantity" onClick={handleIncrease}>+</button>
          <button className="amendButton" disabled={shoppingItem.quantity === 1} aria-label="Decrease quantity" onClick={handleDecrease}>-</button>
          <button className="amendButton" aria-label="Delete item" onClick={handleDelete}>x</button>
        </li>
    )
}