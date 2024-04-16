import React from 'react'
import List from './List.js';
import Card from './Card.js';
const Shop = ({handleClick}) => {
  return (
    <section>
      {List.map((item) => {
        return <Card items={item} key={item.id} handleClick = {handleClick} />
      })}
    </section>
    
  )
}

export default Shop;