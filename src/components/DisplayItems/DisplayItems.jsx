import React, { useState } from 'react'
import './DisplayItems.css'

const DisplayItems = (props) => {

   const onItemClickHandler = (index) => {
      props.updateItems(index)
   }

   return <div className="items">
      {
         props.items.length === 0 ? <p>No items to display</p> :
            props.items.map((data, index) =>
               <div key={index} className="item-show" onClick={() => { onItemClickHandler(index) }}>{data}</div>)
      }
   </div>
}

export default DisplayItems;
