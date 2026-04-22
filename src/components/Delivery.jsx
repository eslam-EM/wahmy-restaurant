import React from 'react'
import logo from '../assets/brandLogo.png'
import toyou from '../assets/toyou.jpeg'
import './Delivery.css'
import animatorImg from '../assets/animatorImg.png'

export default function Delivery() {
  return (
    <div className='container delivery'>
      <h5>
        توصيل مجاني
      </h5>
      <div className="line"></div>
      <div className='d-flex justify-content-evenly px-5 my-4'>
        <div className="animator-holder col-4 position-relative d-none d-lg-block">
          <div className="animator text-center">
              <div>
                  <img src={logo} width={110} />
                  <img src={animatorImg} width={190} />
              </div>
              <p className='mt-2'>وهمي برجر دلوقتي على تطبيق تو يو</p>
              <i className="far fa-hand-point-left mt-3"></i>
          </div>
        </div>
        <div class="card text-white col-9 col-lg-4">
          <img src={toyou} className="card-img shadow" />
        </div>
      </div>
    </div>
  )
}
