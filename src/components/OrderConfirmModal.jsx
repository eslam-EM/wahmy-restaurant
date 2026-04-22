import React from 'react';
import { useCart } from '../context/CartContext';
import './OrderConfirmModal.css';

export default function OrderConfirmModal() {
  const { showConfirm, orderDetails, closeConfirm } = useCart();

  if (!showConfirm) return null;

  return (
    <div className="order-modal" onClick={closeConfirm}>
      <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2> تم تأكيد طلبك!</h2>
        <p>رقم الطلب: #{orderDetails?.orderNumber}</p>
        <p>التاريخ: {orderDetails?.date}</p>
        <hr />
        <h4>المنتجات:</h4>
        {orderDetails?.items.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.name}</span>
            <span>{item.quantity} × {item.price}</span>
          </div>
        ))}
        <hr />
        <h3>الإجمالي: {orderDetails?.total} ج.م</h3>
        <button onClick={closeConfirm}>إغلاق</button>
      </div>
    </div>
  );
}