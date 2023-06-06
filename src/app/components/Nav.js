"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);

  return (
    <header className="absolute w-full py-8">
      <nav className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <Image src={"logo.svg"} width={180} height={180} alt="" />
        </Link>
        <ul className="flex gap-x-8 items-center">
          <li className="flex gap-x-3 items-center">
            <Image src={"phone.svg"} width={42} height={42} alt="" />
            <ul className="text-white">
              <li className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </li>
              <li className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">
                920 234 5768
              </li>
            </ul>
          </li>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image src={"bag.svg"} width={38} height={38} alt="bag" />
            <p className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
