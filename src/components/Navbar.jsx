import React from 'react'
import {appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
      <nav>
        <img src={appleImg} alt='Apple' width={14} height={18} />
        <div>
          {['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'].map((nav) => (
            <div key={nav}>
              {nav}
            </div>
          ))} 
        </div>
        <div>
          <img src={searchImg} alt='searchImg' width={18} height={18} />
           <img src={bagImg} alt='bag' width={18} height={18} />
        </div>
      </nav>  
    </header>
  )
}

export default Navbar