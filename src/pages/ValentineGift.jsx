import valentines from '../data/valentines.js'
import ProductCard from "../components/ProductCard";

const ValentineGift = () => {
  return (
    <div className="font-atkinson mx-auto m-6 text-center">
      <h1 className="text-sm lg:text-2xl text-[#C15127] font-medium tracking-wide uppercase md:text-black hover:text-[#C15127] transition duration-200">
        Find your gift
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {valentines.map((valentine) => (
          <ProductCard key={valentine.id} {...valentine}/>
        ))}
      </div>
    </div>
  );
};

export default ValentineGift;
