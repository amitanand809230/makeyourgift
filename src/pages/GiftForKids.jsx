import React from "react";
import ProductCard from "../components/ProductCard";
import kids from "../data/kids";

const GiftForKids = () => {
  return (
    <>
    <div>
      <div className="font-atkonson mx-auto m-6 text-center">
        <h1 className="text-sm lg:text-2xl mt-6 font-semibold text-[#C15127] md:text-black tracking-wide uppercase mb-6 hover:text-[#C15127]">
          Find the perfect gift
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {kids.map((kid) => (
            <ProductCard key={kid.id} {...kid}/>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default GiftForKids;
