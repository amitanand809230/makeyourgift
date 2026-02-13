import { NavLink } from "react-router-dom";

import her from "../assets/images/her.webp";
import him from "../assets/images/him.webp";
import bracelet from "../assets/images/braclet.webp";
import kids from "../assets/images/kids.webp";
import devotional from "../assets/images/devotional.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const original = [{img:her, path:"/giftforher"}, 
    {img: him, path:"/gifthampers"}, 
    {img: bracelet, path:"/bracelet"},
    {img:kids, path:"/giftforkids"},
    {img:devotional, path:"/devotion"},];

// 🔥 AUTO DUPLICATE IF LESS ITEMS
const images =
  original.length < 6
    ? [...original, ...original]
    : original;

const SwiperSlider = () => {
  return (
    <div className="w-full mx-auto p-4">

      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={0}

        allowTouchMove={true}
        grabCursor={true}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        // 🔥 REAL E-COMMERCE RESPONSIVE
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,   // EXACT 5 on large
          },
        }}
      >

        {images.map((cat, i) => (
          <SwiperSlide key={i}>

            {/*  DESIGN */}
            <div className="px-2">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">

                <NavLink to={cat.path}>
                  <img
                    className="w-full h-44 rounded-2xl object-cover select-none 
                    transition-transform duration-500
                    hover:scale-110"
                    src={cat.img}
                    alt={`img-${i}`}
                    draggable="false"
                  />
                </NavLink>

              </div>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default SwiperSlider;
