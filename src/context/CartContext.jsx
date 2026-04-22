import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // 🔥 Toast State
  const [toast, setToast] = useState({ show: false, message: '' });

  // 📦 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔥 Toast Function (مظبوط)
  const showToast = (message) => {
    setToast({ show: false, message: '' }); // reset

    setTimeout(() => {
      setToast({ show: true, message });

      setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);

    }, 100);
  };

  // 🛒 Add to cart
  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);

      if (existing) {
        const newItems = prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );

        showToast(`تم إضافة ${item.name} إلى السلة`);
        return newItems;
      }

      showToast(`تم إضافة ${item.name} إلى السلة`);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ❌ Remove item
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  // 🔢 Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity } : i
      )
    );
  };

  // 🧹 Clear cart
  const clearCart = () => setCartItems([]);

  // 💰 Total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  // 🔢 Total items
  const getTotalItems = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  };

  // ✅ Confirm order
  const confirmOrder = () => {
    const order = {
      items: [...cartItems],
      total: getTotalPrice(),
      date: new Date().toLocaleString('ar-EG'),
      orderNumber: Math.floor(Math.random() * 1000000)
    };

    setOrderDetails(order);
    setShowConfirm(true);
    clearCart();
  };

  // ❌ Close modal
  const closeConfirm = () => {
    setShowConfirm(false);
    setOrderDetails(null);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems,
      confirmOrder,
      showConfirm,
      orderDetails,
      closeConfirm,

      // 🔥 Toast
      toast,
      setToast,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
}