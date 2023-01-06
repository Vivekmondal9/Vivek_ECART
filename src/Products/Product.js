import React from "react";

import "./Product.css";

function Products(props) {
    const product = props.item;


    function handleSubmit() {


        let cartIt = localStorage.getItem("cartItems");
        if (!cartIt) {
            cartIt = [];
        }
        else {
            cartIt = JSON.parse(cartIt);
        }

        let flag = 0;

        for (let i = 0; i < cartIt.length; i++) {
            if (JSON.stringify(product.id) == cartIt[i].id) {
                flag = 1;
                cartIt[i].QTY = cartIt[i].QTY + 1;
            }
        }

        if (flag == 0) {
            let record = JSON.stringify(product).substring(0, JSON.stringify(product).length - 1) + ",\"QTY\":1}"
            let recordCartFormat = JSON.parse(record)
            cartIt.push(recordCartFormat);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartIt));

        props.notify(cartIt.length);

    }

    return (
        <div className="cdm">
            <div className="card-main">
                <h5 className="product-title">{product.title}</h5>
                <hr></hr>
                <img src={product.image} className="card-img-top" alt="LoadImage"></img>
                <div className="card-body">
                    <h6 className="price-tag">₹ {product.price}</h6>
                    <p className="product-des">{product.description}</p>
                    <button onClick={handleSubmit} className="add-to-cart-btn">Add-To-cart</button>
                </div>
            </div>
        </div>
    )

}

export default Products;