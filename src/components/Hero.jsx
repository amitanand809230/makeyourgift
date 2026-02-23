import { Link } from "react-router-dom";
const Hero = ({ image, alt ="Hero banner", link}) => {
  return (
    <section className="w-full mt-2 ">
      <div className="
        max-w-[1600] mx-auto
        overflow-hidden

      ">
       <Link to={link}>
        <img
          src={image}
          alt={alt}
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

export default Hero;


