import React from 'react';
import "../styles/Card.css";
const Card = ({items,handleClick}) => {

  const {title,author,price,img} = items;
  
  return (
    <div className='card'>
      <div className="imgbox">
      <img className='cardimg' alt="bookimg" src={img} />
      </div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <p>₹ - {price}</p>
        <button onClick={() =>handleClick(items)}>Add to cart</button>
      </div>
    </div>
    
  )
}

export default Card;