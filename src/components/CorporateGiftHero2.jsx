import React from 'react'
import corporateGift from '../assets/images/corporategift.webp'
import { Link } from 'react-router-dom'

const CorporateGiftHero2 = () => {
  return (
    <section className="w-full mt-4 ">

      <div className="
        max-w-400 mx-auto
        overflow-hidden
        
      ">
       <Link to="/gifthampers">
        <img
          src={corporateGift}
          alt="Hero"
          className="
            w-full
            min-h-full
            object-cover
            object-center
            rounded-lg sm:rounded-xl
            border border-[#C15127]
            hover:scale-105
            transition-transform ease-out duration-300
            
          "
        />
        </Link>
      </div>

    </section>
  )
}

export default CorporateGiftHero2
