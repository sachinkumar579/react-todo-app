import React from 'react'
import { useRef } from 'react'
import './AddItems.css'

const AddItems=(props)=> {

    const input =  useRef('');

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        if(input.current.value){
        props.addItems(input.current.value)
        }
    }

    return <div>
           <form onSubmit={onSubmitHandler} className="form">
                <input type="text" ref={input}></input>
                <button type="submit">Add</button>
           </form>
    </div>
}

export default AddItems;