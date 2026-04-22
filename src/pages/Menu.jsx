import React, { useState } from 'react'
import './Menu.css'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import data from '../menu'
import MenuSection from '../components/MenuSection'
import { useCart } from '../context/CartContext'

export default function Menu() {

  const categories = [
    "الكل",
    "برجر سادة",
    "برجر حشو جبن",
    "ساندوتشات الدجاج",
    "وجبات خفيفة",
    "ميجا أنجوس بوكس"
  ]

  const [active, setActive] = useState("الكل")
  const [search, setSearch] = useState("")
  const { getTotalItems } = useCart()

  return (
    <div>
      <Navbar />

      <div className="container main-menu">

        <h2 className='menu-header text-center mb-3'>
          قائمة الطعام
        </h2>

        <div className="line mx-auto"></div>

        <Offers />

        <div className="menu-layout">

          <aside className="menu-sidebar">
            {categories.map(cat => (
              <button
                key={cat}
                className={active === cat ? "active" : ""}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </aside>

          <div className="menu-content">

            <input
              type="text"
              placeholder="ابحث عن وجبة..."
              className="menu-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="cart-box">
              عدد الطلبات: {getTotalItems()}
            </div>

            <MenuSection
              type={active}
              data={data}
              search={search}
            />

          </div>

        </div>

      </div>

    </div>
  )
}