    import React from 'react'
    import data from '../menu'
    import { useCart } from '../context/CartContext'

    export default function Burger() {

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }

    const { addToCart } = useCart()

    return (
        <div className='burger my-3 pt-3'>
            <h5>
                برجر سادة
            </h5>
            <div className="line"></div>
            <div className="mt-4 row">
                {data.map((item, index) => {
                if(item.type === "برجر سادة"){
                    return(
                        <div className="col-8 col-sm-6 col-md-4 col-lg-2 mb-3 mb-lg-0 mx-auto mx-sm-0" key={index}>
                            <div className="card">
                                <img src={item.img} className="card-img-top" height={150} />
                                <div className="card-body">
                                    <h6 className="card-title">{truncateText(item.name,16)}</h6>
                                    <p className="card-text"><small className="text-muted">{truncateText(item.info,55)}</small></p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span>{item.price} EGP</span>
                                        <button className="btn btn-primary" onClick={() => addToCart(item)}>اطلب</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null
                })}
            </div>
        </div>
    )
    }