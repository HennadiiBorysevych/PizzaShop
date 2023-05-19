import React, { useEffect, useState } from "react";

import Image from "next/image";

import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleToping = () => {
    if (isChecked) {
      const newTopping = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newTopping));
      console.log(newTopping);
    } else {
      const newTopping = additionalTopping.filter(
        (item) => item.name !== topping.name
      );
      setAdditionalTopping(newTopping);
    }
  };

  useEffect(() => {
    handleToping();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt=""
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input
        onChange={handleCheckBox}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
      />
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;
