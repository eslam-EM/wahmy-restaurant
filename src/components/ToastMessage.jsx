    import React, { useEffect } from 'react'
    import { useCart } from '../context/CartContext'
    import './ToastMessage.css'

    export default function ToastMessage() {

    const { toast, setToast } = useCart();

    useEffect(() => {
        if (toast.show) {
        const timer = setTimeout(() => {
            setToast({ show: false, message: '' });
        }, 3000);

        return () => clearTimeout(timer);
        }
    }, [toast, setToast]);

    if (!toast.show) return null;

    return (
        <div className="toast-message">
        <div className="toast-content">
            <p>{toast.message}</p>
        </div>
        </div>
    )
    }