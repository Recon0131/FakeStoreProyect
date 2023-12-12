"use client";
import React, { useState } from "react";
import { CartContext } from "./cartContext";

const StateCompo = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);
    


  const addToCart = (item) => {

      if (cart.length > 0) {
        const repetitive = cart.some(product => product.id === item.id);

        if (repetitive) {
            const product = cart.map(product =>{
                if(product.id === item.id){
                    product.cantidad++;
                    return product
                }else { 
                    return product
                }
            })
            setCart([...product])
            setTotal(total+item.price);
        } else{
            item.cantidad = 1;
            setCart([...cart,item])    
            setTotal(total+item.price);
        }
    }
    else{
        item.cantidad = 1;
        setCart([...cart,item])
        setTotal(total+item.price);
    }
  };
  const deleteToCart = (item) => {

    const position = cart.indexOf(item)
    cart.splice(position,1)
    setTotal(total-item.price*item.cantidad);
    
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteToCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default StateCompo;
