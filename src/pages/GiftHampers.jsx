import hero_gift_hamp from '../assets/images/hero_gift_hamp.jpeg'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard';
import  gifthampers  from "../data/gifthampers.js";
const GiftHampers = () => {
  return (
    <>
    <div className='font-atkinson mx-auto m-6 text-center'>
      <Hero image={hero_gift_hamp} alt={"Home banner"} link={"/gifthampers"}/>
      <h1
        className="text-sm lg:text-2xl mt-6
              font-semibold
              text-black  tracking-wide uppercase mb-6 hover:text-[#C15127]
              transition duration-200"
      >
        Find The Perfect Gift
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {gifthampers.map((hamper) => (
        <ProductCard key={hamper.id} {...hamper} />
       ))}
      </div>
    </div>
    </>
  )
}

export default GiftHampers
