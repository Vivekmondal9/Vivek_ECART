

import Footer from "../Footer/Footer.js";
import "./Cart.css";
import "../Header/Header.css";
import CartHeader from "./CartHeader";



function Cart(props) {
  let cartt = localStorage.getItem("cartItems");
  cartt = JSON.parse(cartt);



  function DeleteFromCart(e) {
    let index = 0;
    for (let i = 0; i < cartt.length; i++) {
      if (JSON.stringify(cartt[i].id) === e.target.id) {
        console.log(JSON.stringify(cartt[i].id));
        console.log(e.target.id);
        index = i;
        break;
      }
    }
    console.log(index)
    cartt.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartt));
    window.location.reload();
  }

  let ttl = [];
  let x;

if(cartt){
 cartt.map((p, i) => {

    x = p.QTY * p.price;

    ttl.push(x);
    return x;
  })
}


  let carttotal;
  let totalValue
  if (ttl.length > 0) {
    carttotal = ttl.reduce((a, b) => a + b);
    totalValue=Math.round(carttotal);
    console.log(carttotal);
  }

  
  function reduceItem(e) {
    for (let i = 0; i < cartt.length; i++) {
      if (JSON.stringify(cartt[i].id) === e.target.id) {
        cartt[i].QTY -= 1;

        localStorage.setItem("cartItems", JSON.stringify(cartt))
        window.location.reload();


      }
    }

  }

  function addItem(e) {


    for (let i = 0; i < cartt.length; i++) {
      if (JSON.stringify(cartt[i].id) === e.target.id) {
        cartt[i].QTY += 1;

        localStorage.setItem("cartItems", JSON.stringify(cartt))
        window.location.reload();


      }
    }

  }



  return (
    <div>
      <CartHeader></CartHeader>
      <div className="total">
        <h2 className="cttotal">Total Cart Value: ₹ {totalValue}</h2>
      </div>
      <hr></hr>
      <div className="cart-row">

        {cartt &&
          cartt.map((p, i) => (<div className="card-main" key={i}>
            <h5 className="card-title">{p.title}</h5>
            <hr></hr>
            <img src={p.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h6 className="price-tag">₹ {p.price}</h6>
              <p className="card-text cartdes">
                {p.description}
              </p>
              <hr></hr>
              <p>Quantity</p>
              <div className="quantity-part">
                <button className="minus-quantity" id={p.id} onClick={reduceItem}>-</button>
                <p className="quantity">{p.QTY}</p>
                <button className="plus-quantity" id={p.id} onClick={addItem}>+</button>
              </div>
              <button id={p.id}
                onClick={DeleteFromCart}
                className="btn btn-success"
              >
                Delete
              </button>
            </div>
            <hr></hr>
          </div>))}

      </div>
      <Footer></Footer>
    </div>
  )
}


export default Cart;