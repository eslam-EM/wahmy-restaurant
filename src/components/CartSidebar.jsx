import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

export default function CartSidebar({ isOpen, onClose }) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    confirmOrder
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        
        <div className="cart-header">
          <h3>🛒 سلتك</h3>
          <button className="close-cart" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="empty-cart">السلة فارغة</div>
          ) : (
            cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                
                <img src={item.img} alt={item.name} />

                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <span>{item.price} ج.م</span>
                </div>

                <div className="cart-item-qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove" onClick={() => removeFromCart(item.id)}>🗑</button>
                </div>

              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              الإجمالي: {getTotalPrice()} ج.م
            </div>

            {/* 🔥 الحل هنا */}
            <button
              className="confirm-btn"
              onClick={() => {
                confirmOrder(); // يفتح المودال
                onClose();      // يقفل السايدبار
              }}
            >
              تأكيد الطلب
            </button>

          </div>
        )}

      </div>
    </div>
  );
}