import Image from "next/image";
import React from "react";

export default function WorkListCard() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto mt-10 space-y-4 px-4 py-4">
        <p>Share my work experiences and projects here.</p>
        <div className="flex flex-col w-full mx-auto mt-5 space-x-4 space-y-4">
          <div className="flex  space-x-4">
            <div className="">
              <Image
                src="/work/shopping-cart.png"
                alt="Siva Padmanaban"
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col space-x-4 space-y-2">
              <p className="">Coop2u</p>
              <p className="text-gray-500">2015</p>
            </div>
          </div>
          <div className="flex-grow">
            <p className="text-gray-500">
              Coop2u is an e-commerce platform that connects local farmers with
              consumers, promoting fresh produce and sustainable agriculture.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 ">
              <p className="text-gray-300">Tech :</p>
              <p className="text-gray-500">
                JavaScript, PHP, MySQL, Magneto, Azure VPS{" "}
              </p>
            </div>
            <div className="flex space-x-2 ">
              <p className="text-gray-300">Domain :</p>
              <p className="text-gray-500">E-commerce </p>
            </div>
            <div className="flex space-x-2 ">
              <a href="#" className=" hover:underline">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
