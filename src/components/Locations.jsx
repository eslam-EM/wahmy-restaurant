import React from 'react'
import './Locations.css'

export default function Locations() {
  return (
    <div className='my-5 container'>
        <h5 className='center-title'>
          موجودين في كل مكان
        </h5>
        <div className="line"></div>
        <div className="locations row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4">
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>وسط البلد</h6>
              <p>17 عبدالخالق ثروت - وسط البلد - بجوار كرم الشام</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>6 أكتوبر</h6>
              <p>الحصري - أمام مسجد الحصري</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>الساحل الشمالي</h6>
              <p>الفودكورت بجوار ب لبن بوابة مارينا "4"</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>مصر الجديدة</h6>
              <p>شارع ابراهيم - الكوربه - بجوار بلبن</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>فيصل</h6>
              <p>الجيزه - شارع فيصل - اول العشرين - امام كرم الشام - امام بلبن</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>فرع ألف مسكن</h6>
              <p>218 معادي السرايات الغربية الف مسكن احمد عرابى</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>دمياط</h6>
              <p>دمياط الجديدة - شارع البشبيشي</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>الشيخ زايد</h6>
              <p>الشيخ زايد - وصلة دهشور - بجوار محل بلبن</p>
            </div>
          </div>
          <div className="col d-flex gap-2 mt-3">
            <i className="fas fa-map-pin fs-3"></i>
            <div>
              <h6>شيراتون</h6>
              <p>شارع أنقرة متفرع من شارع عبدالحميد بدوي - بجوار مركز التنمية الرياضي</p>
            </div>
          </div>
        </div>
      </div>
  )
}
