// import data from '../data/products.json';
import { useState } from "react";

export default function Product({ id, name, image, price, updateProduct }) {
 
  
  const [countProduct, setCountProduct] = useState(0);

  function handleIncrementProduct() {
    setCountProduct(countProduct + 1);
    updateProduct(id, name, price, countProduct+1);
  }

  function handleDecrementProduct() {
    if (countProduct > 0) {
      setCountProduct(countProduct - 1);
      updateProduct(id, name, price, countProduct-1);
    }
  }

  return (
    
    <div className="card-product border border-black rounded-lg w-40 h-56 flex flex-col justify-center items-center ">
      <img src={image} alt={name} className="w-20 h-20" />
      <p>{name}</p>
      <p>$ {price}</p>
      <div className="btn-container flex gap-2">
        <button
          className="bg-slate-200 w-9 h-9 rounded-md"
          onClick={() => handleDecrementProduct()}
        >
          -
        </button>
        <p className="bg-slate-50 w-9 h-9 rounded-md border border-slate text-center">
          {countProduct || 0}
        </p>
        <button
          className="bg-slate-200 w-9 h-9 rounded-md"
          onClick={() => handleIncrementProduct()}
        >
          +
        </button>
      </div>
    </div>
  );
}
