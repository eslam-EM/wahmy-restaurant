import React from 'react'
import data from '../menu'

export default function Cheese() {
    
    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }
    
    return (
    <div className='burger my-3 pt-3'>
        <h5>
            برجر حشو جبن
        </h5>
        <div className="line"></div>
        <div className="mt-4 row">
            {data.map((item)=>{
            if(item.type === "برجر حشو جبن"){
                return(
                    <div className="col-8 col-sm-6 col-md-4 col-lg-2 mb-3 mb-lg-0 mx-auto mx-sm-0">
                        <div class="card">
                            <img src={item.img} class="card-img-top" height={150} />
                            <div class="card-body">
                                <h6 class="card-title">{truncateText(item.name,16)}</h6>
                                <p class="card-text"><small className="text-muted">{truncateText(item.info,55)}</small></p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <span>{item.price} EGP</span>
                                    <a href="#" class="btn btn-primary">اطلب</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            })}
        </div>
    </div>
  )
}
