import React from 'react';
import { productProps } from '@/type.d'; // Make sure this is properly imported

const Product = ({ productData }: { productData: productProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {/* Mapping over the array of products */}
      {productData.map(({ id, title, price, description, category, image }: productProps) => (
        <div
          key={id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col"
        >
          {/* Product Image with aspect ratio control */}
          <div className="w-full h-64 mb-4 relative">
            <img
              className="w-full h-full object-contain rounded-md"
              src={image}
              alt={title}
            />
          </div>

          {/* Product Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>

          {/* Product Description (showing the first part with a "Read More" option) */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Product Category */}
          <p className="text-gray-500 text-xs mb-2">Category: {category}</p>

          {/* Product Price */}
          <p className="text-xl font-semibold text-gray-900 mb-4">${price}</p>

          {/* Add to Cart Button */}
          <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-200">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
