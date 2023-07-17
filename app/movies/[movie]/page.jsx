
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux/es/exports";

import Modal from "../../../components/shared/Modal";
import { add } from "../../../components/Redux/CartSlice";
import { BsStarFill } from "react-icons/bs";
import { selectUser } from "../../../components/Redux/UserSlice";
import fetchData from "../../../components/FetchData"

export default function page({ params }) {
  const [openModal, setOpenModal] = useState(false);
  const [movies,setMovies]=useState([])
  const dispatch=useDispatch()

  const user = useSelector(selectUser)

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const fetchedData = await fetchData();
      setMovies(fetchedData);
    };

    fetchDataFromApi();
  }, []);

  const f = movies.find((i) => i.rank == params.movie);

  const handleAddtoCart=(f)=>{
    dispatch(add(f))
  }

  return (
    <div>
      {
        f&&
        <div className="w-full max-w-6xl rounded bg-slate-200 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
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
                </span>
              </div>
              <div className="inline-block align-bottom">
                {user.user.user=="admin@google.dev" && (
                  <div className="gap-2 flex">
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
      }
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
