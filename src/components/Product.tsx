import React from 'react';
import { productProps } from '@/type.d'; // Make sure this is properly imported 
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '@/store/nextSlice'; // Assuming you have addToFavorites action

const Product = ({ productData }: { productData: productProps[] }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {/* Mapping over the array of products */}
      {productData.map(({ id, title, price, description, category, image }: productProps) => (
        <div
          key={id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col h-full"
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

          {/* Product Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Product Category */}
          <p className="text-gray-500 text-xs mb-2">Category: {category}</p>

          {/* Product Price */}
          <p className="text-xl font-semibold text-gray-900 mb-4">${price}</p>

          {/* Buttons */}
          <div className="mt-auto space-y-2">
            {/* Add to Cart Button */}
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image,
                    quantity: 1,
                  })
                )
              }
              className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 active:bg-yellow-600 transition duration-200 w-full"
            >
              Add to Cart
            </button>

            {/* Add to Favorites Button */}
            <button
              onClick={() =>
                dispatch(
                  addToFavorite({
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image,
                  })
                )
              }
              className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 active:bg-yellow-600 transition duration-200 w-full"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
