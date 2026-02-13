import { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { IoChevronDown } from "react-icons/io5";

const Footer = () => {
  const [email, setEmail] = useState("");

  // Dropdown states
  const [openLinks, setOpenLinks] = useState(false);
  const [openHelpful, setOpenHelpful] = useState(false);

  const handleSubmit = () => {
    console.log(email);
    setEmail("");
    
  };

  return (
    <>
      <div className="font-atkinson text-white bg-[#8a6344] px-6 py-10">
        <div className="max-w-full mx-auto grid grid-cols-2 md:flex  md:flex-row gap-10 justify-between">
          
          {/* ===== LINKS ===== */}
          <div className="w-full md:w-auto">
            <div
              onClick={() => setOpenLinks(!openLinks)}
              className="flex  items-center gap-1 cursor-pointer md:cursor-default mb-4"
            >
              <h2 className="font-medium tracking-widest text-sm md:text-md lg:text-lg">
                LINKS
              </h2>

              {/* Arrow only mobile */}
              <IoChevronDown
                className={`md:hidden transition-transform duration-200 ${
                  openLinks ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`
                flex flex-col gap-2 text-sm md:text-md lg:text-lg
                ${openLinks ? "block" : "hidden"}
                md:flex
              `}
            >
              <a href="/" className="hover:underline hover:text-white/70">Home</a>
              <a href="" className="hover:underline hover:text-white/70">Services</a>
              <a href="" className="hover:underline hover:text-white/70">Contact us</a>
              <a href="" className="hover:underline hover:text-white/70">Resources</a>
            </div>
          </div>

          {/* ===== HELPFUL LINKS ===== */}
          <div className="w-full md:w-auto">
            <div
              onClick={() => setOpenHelpful(!openHelpful)}
              className="flex  items-center gap-1 cursor-pointer md:cursor-default mb-4"
            >
              <h2 className="font-medium tracking-widest text-sm md:text-md lg:text-lg">
                Helpful Links
              </h2>

              <IoChevronDown
                className={`md:hidden transition-transform duration-200 ${
                  openHelpful ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`
                flex flex-col gap-2 text-sm md:text-md lg:text-lg
                ${openHelpful ? "block" : "hidden"}
                md:flex
              `}
            >
              <a href="" className="hover:underline hover:text-white/70">Privacy Policy</a>
              <a href="" className="hover:underline hover:text-white/70">Terms of Services</a>
              <a href="" className="hover:underline hover:text-white/70">About us</a>
              <a href="" className="hover:underline hover:text-white/70">Contact us</a>
              <a href="" className="hover:underline hover:text-white/70">Shipping Policy</a>
              <a href="" className="hover:underline hover:text-white/70">Refund Policy</a>
            </div>
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div>
            <h2 className="font-medium tracking-widest text-sm md:text-md lg:text-lg mb-3">
              NEWSLETTER
            </h2>

            <div className="grid grid-cols col-span-3 md:flex gap-0 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Your Email"
                className="bg-white mx-auto
                  w-full md:mx-0 px-38 py-1.5 text-xs          
                  sm:px-3 sm:py-2 sm:text-sm  
                  md:px-4 md:py-2.5 md:text-base text-black outline-none
                  focus:ring-2 focus:ring-[#C15127]
                  transition-all duration-200 rounded-md"
              />

              <button
                onClick={handleSubmit}
                className="bg-green-700 px-2 py-1.5 text-xs
                  sm:px-3 sm:py-2 sm:text-sm   
                  md:px-2 md:py-2.5 md:text-base rounded-md
                  hover:bg-green-800 transition text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="font-atkinson flex justify-between items-center text-black bg-white px-3 py-5">
        <h1>© 2026 Makeyourgift</h1>

        <div className="flex flex-row gap-4">
          <ImFacebook />
          <SiInstagram />
        </div>
      </div>
    </>
  );
};

export default Footer;
