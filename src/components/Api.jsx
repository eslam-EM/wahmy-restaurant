import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Api.css'

export default function Api() {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/comments')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } , [])

  return (

    <div className='container my-5 reviews'>
        <div className="line"></div>
        <div className="row row-cols-1 row-cols-md-2">
            {data.map((item)=>{
                return(
                    <div className="col">
                        <div className='mt-4 bg-light p-4'>
                            <h6 className='my-2'>الاسم : <span className='fw-bold'>{item.name}</span></h6>
                            <p className='my-2'>التقييم : <span>{item.rating} , {item.comment}</span></p>
                            <p className='my-2'>التاريخ : <span>{item.date}</span></p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
