import Image from "next/image";
import { useContext } from "react";

import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

import { CartContext } from "../context/CartContext";

import Topping from "./Topping";
const CartItem = ({ pizza }) => {
  const { removeItem, decreaseAmount, increaseAmount } =
    useContext(CartContext);
  return (
    <li className="select-none list-none">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image src={pizza.image} width={90} height={90} alt="pizza" />
        </div>
        <div className="flex-1 flex flex-col gap-y-1 ">
          <h3 className="text-lg capitalize font-bold">{pizza.name}</h3>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-medium text-[15px]">
              {pizza.crust} crust
            </p>
            <p className="capitalize mb-2 font-medium text-[15px]">
              {pizza.size} size
            </p>
            <div className="flex items-center gap-x-1">
              <button
                onClick={() => decreaseAmount(pizza.id, pizza.price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiMinus />
              </button>
              <p className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">
                {pizza.amount}
              </p>
              <button
                onClick={() => increaseAmount(pizza.id, pizza.price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button
            onClick={() => removeItem(pizza.id, pizza.price, pizza.crust)}
            className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange"
          >
            <IoCloseCircleOutline />
          </button>
          <p>
            <span className="text-[17px] font-medium font-robotoCondensed">
              ${parseFloat(pizza.price * pizza.amount).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
        <p className="font-semibold">
          Toppings:{pizza.additionalTopping.length === 0 && "None"}
        </p>
        {pizza.additionalTopping.map((topping, index) => {
          return (
            <div
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full  leading-none"
              key={index}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default CartItem;
