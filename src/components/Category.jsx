import React from 'react'
import filter from "../assets/FunnelSimple.svg"
import cancel from "../assets/XCircle.svg"

const Category = () => {
  return (
    <div className='category-container'>
        <div className='category-tab'>
          <div className='box'>
          <p className='s1'>All</p>
            <p className='s2'>New Arrivals</p>
            <p className='s1'>Top Sellers</p>
          </div>
        </div>
        <div className='filter-tab'>
            <div className='filter'>
                <img src={filter} alt="" /> Filter & Sort
            </div>
            <div className='filtered'>
               Men  <img src={cancel} alt="" /> 
            </div>
            <div className='filtered'>
               Club Teams  <img src={cancel} alt="" /> 
            </div>
            <div className='filtered'>
              National Teams  <img src={cancel} alt="" /> 
            </div>
        </div>
    </div>
  )
}

export default Category