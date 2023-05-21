import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
const CartItem = ({ pizza }) => {
  return (
    <div className="select-none">
      <div className="flex gap-x-4 mb-2">
        <div className="flex justify-center items-center">
          <Image src={pizza.image} width={90} height={90} alt="" />
        </div>
        <div className="flex-1">
          <div>{pizza.name}</div>
          <div>
            <div>{pizza.crust} crust</div>
            <div>{pizza.size} size</div>
            <div className="flex items-center gap-x-1">
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiMinus />
              </div>
              <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">
                {pizza.quantity}
              </div>
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange">
            <IoCloseCircleOutline />
          </div>
          <div>
            <span>${parseFloat(pizza.price * pizza.amount).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
