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
    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-3 text-left group">
      <div className="">
        <div className=" relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-xl hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-gray-500 font-bold truncate w-full">{title}</h3>
        <div className="flex gap-2 justify-between items-center p-0.5">
          <p className="text-xl text-green-800 font-medium">₹ {mrp}</p>
          <p className="text-lg text-red-800 font-light line-through">
            ₹ {price}
          </p>
          <p className="text-sm text-red-500 font-medium bg-orange-300 rounded px-1">
            {discount}% OFF
          </p>
        </div>
        {showCart && (
          <button className="w-full mt-2 bg-black text-white py-2 rounded">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
