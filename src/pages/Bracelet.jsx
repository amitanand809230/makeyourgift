import Hero from "../components/Hero"
import bracelet_hero from '../assets/images/bracelets/bracelet_hero.png'
import ProductCard from "../components/ProductCard"
import bracelets from "../data/bracelets"


const Bracelet = () => {
  return (
    <div>
      <div className='font-atkinson mx-auto m-2 text-center'>
        <Hero image={bracelet_hero}/>
       <h1
        className="text-sm lg:text-2xl mt-6
              font-semibold text-[#C15127]
               md:text-black  tracking-wide uppercase mb-6 hover:text-[#C15127]
              transition duration-200"
      >
        Find The Perfect Gift
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {bracelets.map((bracelet) => (
        <ProductCard key={bracelet.id} {...bracelet} />
       ))}
    </div>
    </div>
    </div>
  )
}

export default Bracelet
