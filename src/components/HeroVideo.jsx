import React from "react";
import { Link } from "react-router-dom";

import heroVideo from "../assets/videos/hero_video.mp4";

const HeroVideo = () => {
  return (
    <section className="w-full mt-2">

      <div className="max-w-400 mx-auto overflow-hidden">

        <Link to="/gifthampers">

          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              min-h-full
              object-cover
              object-center
              rounded-lg sm:rounded-xl
              border border-[#C15127]
              hover:scale-105
              transition-transform ease-out duration-300
            "
          />

        </Link>

      </div>

    </section>
  );
};

export default HeroVideo;
