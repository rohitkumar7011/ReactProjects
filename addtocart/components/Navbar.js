import React from "react";
import "../styles/Navbar.css";
// import '@fortawesome/fontawesome-free/css/all.mim.css';
// import cart1 from '../images/cart1.jpg';
const Navbar = ({size,setshowcart}) => {

  return (
    <nav>
      <div className="nav-box">
        <span className="shop" onClick={() => setshowcart(true)}>Shopify</span>
        <div className="cart" onClick={() => setshowcart(false)}>
          <img className="nav-img"
            alt="addtocartcart"
            src="https://tse2.mm.bing.net/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?rs=1&pid=ImgDetMain"
            style={{ height: 50, width: 50 }}
          />
          <span className="num">{size}</span>
          {/* <span>
            <i className="fas fa-cart-plus"></i>
          </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
