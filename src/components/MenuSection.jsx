import React from 'react'
import { useCart } from '../context/CartContext'

export default function MenuSection({ type, data, search }) {

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }

  const { addToCart } = useCart()

  const filtered = data.filter(item => {
    const matchCategory = type === "الكل" || item.type === type
    const matchSearch = item.name.includes(search)
    return matchCategory && matchSearch
  })

  return (
    <div className='my-4'>

      <div className="row mt-4">

        {filtered.map((item, index) => (
          <div
            key={index}
            className="col-8 col-sm-6 col-md-4 col-lg-3 mb-4 fade-in"
          >
            <div className="card h-100 custom-card">

              <img
                src={item.img}
                className="card-img-top"
                height={160}
                alt={item.name}
              />

              <div className="card-body d-flex flex-column">

                <h6>{truncateText(item.name, 18)}</h6>

                <p className="text-muted small">
                  {truncateText(item.info, 60)}
                </p>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span>{item.price} EGP</span>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => addToCart(item)}
                  >
                    اطلب
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}