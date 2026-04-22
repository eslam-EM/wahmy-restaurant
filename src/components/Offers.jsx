    import React from 'react'
    import './Offers.css'
    import data from '../menu'
    import { useCart } from '../context/CartContext'

    export default function Offers() {
    
    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }

    const { addToCart } = useCart()  // <-- أضف هذا السطر

    return (
        <div className='offers-section'>
        <div className="container">
            <div className="section-header text-center mb-5">
            <h5 className="offers-title"> عروض خاصة</h5>
            <div className="line"></div>
            <p className="offers-subtitle mt-2">أفضل العروض الحصرية لعملائنا الكرام</p>
            </div>
            
            <div className="row g-4">
            {data.map((item, index) => {
                if(item.type === "عروض"){
                return(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <div className="offer-card">
                        <div className="offer-badge">🔥 عرض خاص</div>
                        <div className="offer-img-wrapper">
                        <img src={item.img} className="offer-img" alt={item.name} />
                        </div>
                        <div className="offer-body">
                        <h5 className="offer-title">{item.name}</h5>
                        <p className="offer-text">{truncateText(item.info, 60)}</p>
                        <div className="offer-footer">
                            <span className="offer-price">{item.price} <small>EGP</small></span>
                            <button className="offer-btn" onClick={() => addToCart(item)}>
                            اطلب الآن
                            <span className="btn-icon"></span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                )
                }
                return null;
            })}
            </div>
        </div>
        </div>
    )
    }