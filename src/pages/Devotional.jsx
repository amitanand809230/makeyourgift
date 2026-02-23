import ProductCard from "../components/ProductCard";
import devotionals from "../data/devotionals.js";

const Devotional = () => {
  return (
    <div className="font-atkinson mx-auto m-6 text-center">
      <h1 className="text-sm lg:text-2xl mt-6 font-semibold text-[#C15127] md:text-black tracking-wide uppercase hover:text-[#C15127] transition duration-200">
        Find the perfect
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {devotionals.map((devotional) => (
          <ProductCard key={devotional.id} {...devotional} />
        ))}
      </div>
    </div>
  );
};

export default Devotional;
