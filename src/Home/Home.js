import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Products from "../Products/Product";
import "./Home.css";

function Home() {

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [error,setError] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                setError();
            })
            .catch(err => setError(err))
    }, [])

    
     function notifyHome(count){
        setCount(count);
     }



    return (
        <div className="HomeElements">
            <Header count={count}></Header>
            <div className="row">
                {products &&
                    products.map((p, i) => (<div key={i} className="col-md-3"><Products key={i} item={p} notify={notifyHome}></Products></div>))}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;