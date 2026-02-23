import surprises from '../data/surprises.js'
import ProductCard from "../components/ProductCard";

const SurpriseInBox = () => {
  return (
    <div className="font-atkinson mx-auto m-6  text-center">
      <h1 className="text-sm  lg:text-2xl  mt-6 font-semibold text-[#C15127] md:text-black tracking-wide uppercase hover:text-[#C15127] transition duration-200">
        Find your gift
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {surprises.map((surprise) => (
          <ProductCard key={surprise.id} {...surprise}/>
        ))}
      </div>
    </div>
  );
};

export default SurpriseInBox;
