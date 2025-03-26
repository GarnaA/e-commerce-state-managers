import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);

      setTotal(total);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newCart = [];
    let found = false;
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
  
      if (item.id === id) {
        found = true;
  
        newCart.push({ ...item, amount: item.amount + 1 });
      } else {
        newCart.push(item);
      }
    }
  
    if (!found) {
      newCart.push({ ...product, amount: 1 });
    }
  
    setCart(newCart);
  };
  
  const removeFromCart = (id) => {
    let newCart = [];
    let found = false;
  
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        found = true;
        if (cart[i].amount > 1) {
          newCart.push({ ...cart[i], amount: cart[i].amount - 1 });
        }
      } else {
        newCart.push(cart[i]);
      }
    }
    if (found) {
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([])
  };

  const increaseAmount = (id) => {
    let newCart = [];
    
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        newCart.push({ ...cart[i], amount: cart[i].amount + 1 });
      } else {
        newCart.push(cart[i]);
      }
    }
    
    setCart(newCart);
  };
  
  const decreaseAmount = (id) => {
    let newCart = [];
    
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        if (cart[i].amount > 1) {
          newCart.push({ ...cart[i], amount: cart[i].amount - 1 });
        }
      } else {
        newCart.push(cart[i]);
      }
    }
  
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
