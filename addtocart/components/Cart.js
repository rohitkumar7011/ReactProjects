import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
const Cart = ({ cart, setCart,handlechange }) => {

  const[price,setprcietotal] = useState(0);

 const hadndleremove =(id) => {
  const arr = cart.filter((item) => 
    item.id !== id);
    setCart(arr);
 }
   const handleprice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price
    });
    setprcietotal(ans)
   };

   useEffect(() => {
    handleprice();
   })

  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="cartcard" key={item.id}>
            <div className="imgbox">
              <img className="cardimg" alt="bookimg" src={item.img} />
            </div>
            <div>
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>₹ - {item.price}</p>
            </div>
            <button className="btn" onClick={() => handlechange(item,-1)}>-</button>
            <p>{item.amount}</p>
            <button className="btn" onClick={() => handlechange(item,+1)}>+</button>
            <button className="btn" onClick={() => hadndleremove(item.id)}>Remove</button>
            
          </div>
        );
      })}
      <h4>Total Price: {price}</h4>
    </div>
  );
};

export default Cart;
