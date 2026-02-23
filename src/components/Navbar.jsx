import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  const links = [
    { name: "GIFT HAMPERS", path: "/gifthampers" },
    { name: "BRACELET", path: "/bracelet" },
    { name: "GIFT FOR KIDS", path: "/giftforkids" },
    { name: "DEVOTIONAL GIFTS", path: "/devotional" },
    { name: "GIFT FOR HER", path: "/giftforher" },
    { name: "SURPRISE IN BOX", path: "/surpriseinbox" },
    { name: "VALENTINE GIFT", path: "/valentinegift" },
  ];

  return (
    <>
      {/* Header */}
      <header className="flex flex-col font-atkinson justify-between items-center sticky top-0 z-50 bg-white px-3 sm:px-5 py-2 shadow-sm">
        <div className="flex items-center gap-3">
          {/* HAMBURGER (sm → <lg) */}
          <button
            className="lg:hidden text-2xl sm:text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* OVERLAY */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-gray-600/30 z-50 lg:hidden"
            />
          )}

          {/* LOGO */}
          <div className="shrink-0 hover:scale-105 transition-transform duration-300">
            <NavLink to="/">
              <h1 className="text-2xl sm:text-3xl font-medium text-black cursor-pointer">
                make
                <span className="bg-[#C15127] text-white px-2 mx-1 rounded-md">
                  your
                </span>
                gift
              </h1>
            </NavLink>
          </div>

          <div className="ml-auto flex items-center gap-4 lg:gap-6">
            {/* NAV LINKS */}
            <nav
              className="hidden md:hidden lg:flex items-center gap-1.5 lg:gap-3.5
"
            >
              {links.map((item, i) => (
                <NavLink
                  to={item.path}
                  key={i}
                  className={({ isActive }) =>
                    `text-sm lg:text-base font-semibold transition duration-200 ${isActive ? "text-[#C15127] border-b-2 border-[#C15127]" : "text-black hover:text-[#C15127]"}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            {/* Search bar for small screen sizes*/}
            <div className=" lg:hidden flex md:mx-auto  max-w-175 z-40 hover:shadow-md transition-all duration-300 rounded-full h-10  border-[1.5px] border-[#8a6344] backdrop-blur-md bg-opacity-30 lg:mx-auto w-full">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="bg-white border  focus:outline-none
                        focus:ring-2
                      focus:ring-[#C15127]
                        focus:ring-offset-1
                        transition-all duration-200 rounded-full placeholder:text-sm outline-none placeholder:text-gray-600 py-1 pl-4 pr-12 leading-8 w-full  opacity-100"
              />
              <button
                onClick={handleSearch}
                type="button"
                className="absolute right-0 transition-all duration-300 ease-in-out text-[#8a6344] font-bold hover:bg-[#C15127] w-11.25 rounded-full h-full flex justify-center items-center"
                fdprocessedid="5n8rnd"
              >
                <IoSearch className="text-black" />
              </button>
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-4 sm:gap-5 text-2xl sm:text-3xl md:text-4xl text-gray-700">
              <button
                aria-label="Cart"
                className="p-1  hover:text-[#C15127] transition m-2 border rounded-full"
              >
                <TiShoppingCart />
              </button>

              <button
                aria-label="Profile"
                className="p-1 hover:text-[#C15127] transition  border rounded-full"
              >
                <CgProfile />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Search bar */}
          <div className="hidden lg:flex md:mx-auto  max-w-175 z-40 hover:shadow-md transition-all duration-300 rounded-full h-10 border-[1.5px] border-[#8a6344] backdrop-blur-md bg-opacity-30 lg:mx-auto w-full">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for gifts, occasion, hampers etc."
              className="bg-white border  focus:outline-none
                        focus:ring-2
                      focus:ring-[#C15127]
                        focus:ring-offset-1
                        focus:border-none
                        transition-all duration-200
                        rounded-full placeholder:text-sm outline-none placeholder:text-gray-600 py-1 pl-4 pr-12 leading-8 w-full  opacity-100"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="absolute right-0 transition-all duration-300 ease-in-out text-[#8a6344] font-bold hover:bg-[#C15127] w-11.25 rounded-full h-full flex justify-center items-center"
              fdprocessedid="5n8rnd"
            >
              <IoSearch className="text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* ✅ HAMBURGER MENU (SAME LINKS) */}

      <div
        className={`lg:hidden bg-white/90 backdrop-blur-md fixed top-18 left-0 shadow-xl z-100 w-full overflow-hidden transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}

  `}
      >
        {/* LINKS – ARRAY */}
        <nav className="flex flex-col gap-4 px-5">
          {links.map((item, j) => (
            <NavLink
              to={item.path}
              key={j}
              onClick={() => setOpen(false)}
              className="
                text-base
                font-semibold
                text-gray-700
                hover:text-[#C15127]
                border-b pb-2
              "
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
