import Product from "./Product";
import OrderProduct from "./OrderProduct";
import data from "../data/products.json";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export function ShoppingCart() {
  
  const [productOrder, setProductOrder] = useState([]);
  
  const navigate = useNavigate();

  //Dirige a la página de gracias 
  const handleNavigation = () => {
    navigate('/thanks');
  };

   let cart = productOrder; // asignamos el producteOrder a cart para tener los valores actualizados y de manera global
  
  //Agregamos productos al carrito 
  const addCart = (id,name, price, quantity) => {
    const products = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
    };

    const updateOrder = updateProductOrder(productOrder, products); //Enviamos los products actuales y los productos que vienen de Product
    const nextProduct = updateOrder.filter((product) => product.quantity !== 0); // Solo se va mostrar los productos que tenga aunque sea 1 en cantidad
    setProductOrder(nextProduct);
  };
 
  //Vamos actualizando la orden actual
  const updateProductOrder = (currentOrder, newProduct) => {
    
    // Busca si dentro de los productos de la orden ya existe uno igual a nuevo producto agregado al carrito
    const productIndex = currentOrder.findIndex(
      (product) => product.name === newProduct.name
    );

    // Si el producto existe entonces actualiza la cantidad 
    //SINO pues actualiza la lista agregando el producto
    if (productIndex !== -1) {
      const updateOrder = [...currentOrder];

      //Cada vez que el nuevo producto coincide con uno que ya se encuentre en el carrito
      //actualiza la cantidad
      updateOrder[productIndex].quantity = +newProduct.quantity; 

      return updateOrder;
    } else {
      return [...currentOrder, newProduct];
    }
  };


      


 

  return (
    <main>
      <section className=" w-full">
        <div className="lg:*:container flex flex-col justify-center items-center">
          <div className="description-container flex flex-col justify-center items-center gap-2 ">
            <h1 className="font-bold text-6xl ">Shopping Cart</h1>
            <p className="leading-8 text-3xl mt-3">
              Este es un carrito de compras donde se podra ir agregando productos a la orden de compra y ir sabiendo su total. Al dar clic en el botón de "Submit Your Order", te llevara a una nueva página de dice "Gracias por tu compra".
            </p>
          </div>
          <div className="shopping grid grid-cols-3 my-6 rounded-md bg-black">
            <div className="list-product bg-white px-8 col-span-2 rounded-s-md">
              <h2 className="subtitle">List of Productos</h2>
              <div className="grid-products grid grid-cols-3 py-6 gap-4 place-items-center">
                {data.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.image_url}
                      price={product.price}
                      updateProduct={addCart}
                    />
                  );
                })}
              </div>
            </div>

            <div className="shopping-order px-4 flex flex-col gap-4 col-span-1 bg-slate-100 rounded-e-md ">
              <h2 className="subtitle">Order</h2>
               {
                cart.map((product) =>{
                  return(
                    <OrderProduct key={product.id} name={product.name} cost={Math.round((product.price * product.quantity)*100)/100}   />
                  )
                })
               }
              
              <div className="flex flex-row text-xl font-medium text-gray-600 justify-between">
                <p className="">Total</p>
                <p>${Object.values(cart).reduce((total, product) => Math.round( total + (product.quantity * product.price ) * 100) / 100 ,0)}</p>
              </div>
              <button className="bg-purple-700 text-white px-2 py-2 rounded-md disabled:bg-gray-800"  disabled = {cart.length === 0} onClick={handleNavigation}>
                Submit Your Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


