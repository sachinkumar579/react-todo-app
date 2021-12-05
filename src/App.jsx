import { useState } from 'react'
import './App.css'
import AddItems from './components/AddItems/AddItems'
import DisplayItems from './components/DisplayItems/DisplayItems'

function App() {
  const [items, setItems] = useState([])

  const addItems=(newItem)=>{
       setItems((prevItem)=>[...prevItem,newItem])
  }

  const updateItems=(index)=>{
    console.log(index)
    setItems((prevItem)=> prevItem.filter((data,itemIndex)=> index!=itemIndex))
  }

  return (
    <div className="App">
        <AddItems addItems={addItems}></AddItems>
        <DisplayItems items={items} updateItems={updateItems} ></DisplayItems>
    </div>
  )
}

export default App
