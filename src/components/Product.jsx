import React, { useState, useEffect } from "react";
// import {  useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Product() {
  const { id } = useParams();
  const [cartBtn,setCartBtn] = useState("Add to Cart");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCart = (product) => {
    if(cartBtn === "Add to Cart"){
      setCartBtn("Remove from Cart");
    }
    else{
      setCartBtn("Add to Cart");
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
        <>
        <div className="col-md-6 mt-5">
            <Skeleton height={400}/>
        </div>
        <div className="col-md-6 mt-5" style={{lineHeight:2}}>
            <Skeleton height={30} width={200} />
            <Skeleton height={100} width={550} />
            <Skeleton height={30} width={150}/>
            <Skeleton height={70} width={200}/>
            <Skeleton height={90}/>
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}} />
        </div>
        </>
    )
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img src={product.image} alt="Card" height="400px" width="400px" />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <p className="lead fw-bold display-5">$ {product.price}</p>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark me-2 w-100" onClick={handleCart}>
            {cartBtn}
          </button>
          
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">            
            {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
