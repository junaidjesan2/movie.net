"use client";
import React, { useEffect, useState } from "react";

import Modal from "../../../components/shared/Modal";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineLibraryAdd } from "react-icons/md";
import fetchData from "../../../components/FetchData";

export default function page({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [admin_email, setAdminEmail] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setAdminEmail(email);
  }, []);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const fetchedData = await fetchData();
      setMovies(fetchedData);
    };

    fetchDataFromApi();
  }, []);

  const f = movies?.find((i) => i.rank == params.movie);

  const handleAddtoCart = (f) => {
    var data = JSON.parse(localStorage.getItem('watchLater')||"[]")
    
    var cartData = {
      id: f._id,
      image: f.thumbnail,
      name: f.title,
    };

    data.push(cartData);

    localStorage.setItem("watchLater", JSON.stringify(data));
    alert("Wish list added")
  };

  return (
    <div>
      {f && (
        <div className="w-full max-w-6xl rounded bg-slate-200 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="">
                <img src={f.image[2][1]} className="w-full z-10" alt="" />
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
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  {admin_email == "admin@google.dev" && (
                    <div className="gap-2 flex">
                      <button
                        onClick={() => handleAddtoCart(f)}
                        className=""
                      >
                        <MdOutlineLibraryAdd/>
                      </button>
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                      >
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> make Rating
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-10">
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
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
