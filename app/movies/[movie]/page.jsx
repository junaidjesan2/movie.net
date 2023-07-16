"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux/es/exports";

import { Movies } from "../../../Movies";
import Modal from "../../../components/shared/Modal";
import { add } from "../../../components/Redux/CartSlice";
import { BsStarFill } from "react-icons/bs";

export default function page({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch=useDispatch()

  const f = Movies.find((i) => i.rank == params.movie);

  const handleAddtoCart=(f)=>{
    dispatch(add(f))
  }

  const admin_email = "h";
  return (
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img src={f.image} className="w-full relative z-10" alt="" />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">{f.title}</h1>
              <p className="text-sm">{f.description}</p>
            </div>
            <div className="w-full">
              <div className="flex items-center align-bottom mr-5 mb-5">
                <span className="text-2xl leading-none align-baseline">
                  <BsStarFill />
                </span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {f.rating}
                  <Link href={`${f.trailer}`}>
                    <span className="text-sm text-[#6A64F1] font-bold">
                      /Trailer
                    </span>
                  </Link>
                </span>
              </div>
              <div className="inline-block align-bottom">
                {admin_email && (
                  <div className="gap-2 flex">
                    <button
                    onClick={() => setOpenModal(true)}
                    className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> Make Comment
                  </button>
                  <button
                    onClick={() => handleAddtoCart(f)}
                    className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> Watch Later
                  </button>
                  </div>
                )}
              </div>
              <div className="mt-10">
                <h1
                  className="px-3 py-2 flex justify-start border-2 rounded-xm sm:w-40 md:w-full mx-3"
                  for="yes"
                >
                  Writer: {f.director[0]}
                </h1>
                <h1
                  className="px-3 py-2 flex justify-start border-2 rounded-xm sm:w-40 md:w-full mx-3"
                  for="yes"
                >
                  Director: {f.director[0]}
                </h1>
                <h1
                  className="px-3 py-2 flex justify-start border-2 rounded-xm sm:w-40 md:w-full mx-3"
                  for="yes"
                >
                  Genre: {f.genre[0]}
                </h1>
                <h1
                  className="px-3 py-2 flex justify-start border-2 rounded-xm sm:w-40 md:w-full mx-3"
                  for="yes"
                >
                  Publish Date: {f.year}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
