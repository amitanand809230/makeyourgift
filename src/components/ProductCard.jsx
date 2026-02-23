const ProductCard = ({
  id,
  image,
  title,
  mrp,
  price,
  discount,
  showCart = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 text-left group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 line-clamp-2 truncate w-full">
        {title}
      </h3>

      {/* Price Section */}
      <div className="flex items-center justify-between mt-1">

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-green-700">
          ₹ {mrp}
        </p>

        <p className="text-xs sm:text-sm md:text-base text-gray-500 line-through">
          ₹ {price}
        </p>

        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-red-600 bg-orange-100 rounded px-1">
          {discount}% OFF
        </p>

      </div>

      {/* Add to Cart */}
      {showCart && (
        <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;