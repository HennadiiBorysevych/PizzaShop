"use client";
import { useState } from "react";
//images
import Image from "next/image";
//madal
import Modal from "react-modal";
//components
import PizzaDetails from "./PizzaDetails";
//icons
import { IoCloseOutline } from "react-icons/io5";

//bind modal to body
Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-x1">
      <Image
        onClick={openModal}
        className="lg:hover:translate-y-3 transition-all dutation-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      />
      <h3
        onClick={openModal}
        className="text-x1 font-bold mb-3 capitalize cursor-pointer "
      >
        {pizza.name}
      </h3>
      <p className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </p>
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-x1 font-semibold">
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        <button
          onClick={openModal}
          className="btn btn-sm gradient text-sm lg:hidden px-3"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {/* modal */}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <PizzaDetails
            pizza={pizza}
            modal={modalIsOpen}
            setModal={setModalIsOpen}
          />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
