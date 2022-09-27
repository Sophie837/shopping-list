import React, {useState} from 'react';
import './App.css';
import { ShoppingItem } from './ShoppingItem';

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const handleChange = ({ target }) => {
    setItem(target.value)
  }

  const handleSubmit = () => {
    if (item !== '') {
      setList(prevList => [...prevList, {name: item, quantity: 1}])
      setItem('')
    }
  }

  const deleteItem = (itemToDelete) => {
    setList(prevList => prevList.filter(item => item.name !== itemToDelete))
  };

  const decreaseQuantity = (itemToDecrease) => {
    setList(prevList => prevList.map(item => {
      if(item.name === itemToDecrease) {
          return {name: item.name, quantity: item.quantity -1}
        } else {
        return item;
        }
    }))
  }

  const increaseQuantity = (itemToIncrease) => {
    setList(prevList => prevList.map(item => {
      if(item.name === itemToIncrease) {
          return {name: item.name, quantity: item.quantity +1}
      } else {
        return item;
      }
    }))
  }

  return (
    <div className="App">
      <label htmlFor="item">What do you need?</label>
      <input type="text" name="item" value={item} placeholder="Item" onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>Add</button>
      <h2>New item</h2>
      <p>{item}</p>
      <h2>Shopping list</h2>
      {list !== [null] && 
      <ul className="shoppingList">{list.map((item, index) => ( 
        <ShoppingItem key={`${item.name}-${index}`} shoppingItem={item} deleteItem={deleteItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
        ))}
      </ul>}

    </div>
  );
}

export default App;
