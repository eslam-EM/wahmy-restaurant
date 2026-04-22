import React from 'react'
import './Categories.css'
import cat1 from '../assets/cat1.png'
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'
import cat4 from '../assets/cat4.png'
import cat5 from '../assets/cat5.png'
import cat6 from '../assets/cat6.png'
import { NavLink } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='categories-section'>
      <div className="container">
        <div className="section-header text-center">
          <h5 className="categories-title"> استكشف القائمة </h5>
          <div className="line"></div>
          <p className="categories-subtitle">اكتشف أشهى الأطباق والعروض الحصرية</p>
        </div>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center g-4 mt-2">
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat1} alt="العروض" />
                <h5 className="card-title">العروض</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat2} alt="برجر سادة" />
                <h5 className="card-title">برجر سادة</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat3} alt="برجر حشو جبن" />
                <h5 className="card-title">برجر حشو جبن</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat4} alt="ساندوتشات الدجاج" />
                <h5 className="card-title">ساندوتشات الدجاج</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat5} alt="وجبات خفيفة" />
                <h5 className="card-title">وجبات خفيفة</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="category-card">
              <div className="card-body">
                <img src={cat6} alt="ميجا أنجوس بوكس" />
                <h5 className="card-title">ميجا أنجوس بوكس</h5>
                <NavLink className="card-link" to='/menu'>
                  شوف باقي المنيو <i className="fas fa-arrow-left"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}