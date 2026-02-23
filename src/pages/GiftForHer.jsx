import ProductCard from "../components/ProductCard";
import hers from "../data/hers.js";
const GiftForHer = () => {
  return (
    <div className="font-atkinson mx-auto m-6 text-center">
      <h1 className="text-sm md:text-2xl mt-6 font-semibold text-[C15127] md:text-black tracking-wide uppercase mb-6 hover:text-[#C15127] transition duration-200">
        Find the perfect gift
      </h1>
      <div className="grid grid-cols2 md:grid-cols-4 gap-6">
        {hers.map((her) => (
          <ProductCard key={her.id} {...her} />
        ))}
      </div>
    </div>
  );
};

export default GiftForHer;
