import Navbar from './components/Navbar';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from 'react';


function App() {

  const[cart,setCart] = useState([]);
  const[showcart,setshowcart] = useState(true);

 const  handleClick = (items) =>{
    let Ispresent = false;

    cart.forEach((item) => {
      if (item.id === items.id){
        Ispresent = true;
      }
      if(Ispresent){
        console.log("already present here");
      }
    })
    setCart([...cart,items]);
  }

  const handlechange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <div className="App">
      <Navbar size={cart.length} setshowcart={setshowcart}/>
      {showcart ? <Shop handleClick = {handleClick}/> : <Cart cart={cart} setCart={setCart} handlechange={handlechange}/>}
      </div>
  );
}

export default App;
