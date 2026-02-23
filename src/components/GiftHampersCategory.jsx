import SwiperSlider from "./SwiperSlider";
import  hampers  from "../data/hamper.js";
import ProductCard from "./ProductCard";

const GiftHampersCategory = () => {
  return (
    <div className="font-atkinson mx-auto mt-6 text-center">
      <h1
        className="text-sm lg:text-base
              font-semibold
              text-black  tracking-wide uppercase mb-6 hover:text-[#C15127]
              transition duration-200"
      >
        Gift Hampers Category
      </h1>
      <SwiperSlider />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {hampers.map((hamper) => (
        <ProductCard key={hamper.id} {...hamper} />
       ))}
      </div>
    </div>
  );
};

export default GiftHampersCategory;
