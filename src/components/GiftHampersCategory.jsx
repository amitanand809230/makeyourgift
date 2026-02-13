import React from "react";
import SwiperSlider from "./SwiperSlider";

import hamper1 from "../assets/images/hamper1.webp";
import hamper2 from "../assets/images/hamper2.webp";
import hamper3 from "../assets/images/hamper3.webp";
import hamper4 from "../assets/images/hamper4.webp";
import hamper5 from "../assets/images/hamper5.webp";
import hamper6 from "../assets/images/hamper6.webp";
import hamper7 from "../assets/images/hamper7.webp";
import hamper8 from "../assets/images/hamper8.webp";

const hampers = [
  {
    image: hamper1,
    title: "Personalized Forever Love Gift Hamper For Men-Black",
    mrp: 1499,
    price: 2799,
    discount: "46",
  },
  {
    image: hamper2,
    title: "Personalized Frontier Leather Wallet With Name & Charm-Black",
    mrp: 999,
    price: 1799,
    discount: 44,
  },
  {
    image: hamper3,
    title: "Signature Executive Gift Hamper For Men-Black-36",
    mrp: 4499,
    price: 9999,
    discount: 25,
  },
  {
    image: hamper4,
    title: "Personalized Love & Luxury Men’s Valentine Gift Hamper-Brown",
    mrp: 1899,
    price: 2999,
    discount: 37,
  },
  {
    image: hamper5,
    title:
      "Ishq-E-Jhumka Set Of 12 Oxidized Designer Jhumka Earrings With Jewelry Box",
    mrp: 1299,
    price: 2199,
    discount: 41,
  },
  {
    image: hamper6,
    title: "Pretty Pairings Set Of 12 Designer Earrings With Jewelry Box",
    mrp: 1399,
    price: 2199,
    discount: 36,
  },
  {
    image: hamper7,
    title:
      "Personalized Clutch Eyewear Case Sunglasses & Perfume Gift Hamper-Black",
    mrp: 2999,
    price: 3299,
    discount: 9,
  },
  {
    image: hamper8,
    title: "Personalized Clutch Eyewear Case & Sunglasses Gift Hamper-Black",
    mrp: 2799,
    price: 3499,
    discount: 20,
  },
];

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
        {hampers.map((hamper, index) => (
          <div
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-3 text-left group"
            key={index}
          >
            <div className="px-2 mt-6 ">
              <div className="relative over-flow-hidden rounded-lg">
                <img
                  className="w-full h-full rounded-xl hover:scale-95 transition duration-300"
                  src={hamper.image}
                  alt=""
                />
              </div>
              <h3 className="text-gray-500 font-bold truncate w-full">
                {hamper.title}
              </h3>
              <div className="font-atkinson flex gap-1 justify-around items-center p-0.5 ">
                <p className="text-xl text-green-800 font-medium">₹ {hamper.mrp}</p>
                <p className="text-lg text-red-800 font-light line-through">₹ {hamper.price}</p>
                <p className="text-sm text-red-500 font-medium bg-orange-100 rounded px-1">{hamper.discount}% OFF</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftHampersCategory;
