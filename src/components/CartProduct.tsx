import React from "react";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface cartProductProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4 p-4">
      {/* Product Image */}
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />

      {/* Product details and controls */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1 w-full">
          {/* Product Title, Description, and Price */}
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price * 10} />
            </span>
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      description: item.description,
                      category: item.category,
                      image: item.image,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      description: item.description,
                      category: item.category,
                      image: item.image,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer"
              >
                <LuMinus />
              </span>
            </div>

            {/* Remove Product */}
            <div
              onClick={() => dispatch(deleteProduct(item.id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>

        {/* Subtotal Price - Aligned to the right */}
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * 10 * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
