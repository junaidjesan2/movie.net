"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Paginate from "../../components/shared/Paginate";

import { BsStarFill } from "react-icons/bs";
import fetchData from "../../components/FetchData";

export default function AllMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const fetchedData = await fetchData();
      setMovies(fetchedData);
    };

    fetchDataFromApi();
  }, []);


  const f = movies?.find((i) =>
    i.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = movies.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="mx-auto my-4">
        <form action="" className="relative mx-auto w-max">
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#6A64F1] focus:pl-16 focus:pr-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#6A64F1] peer-focus:stroke-[#6A64F1]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
      {searchValue && f ? (
        <div className="!z-5 relative rounded-[20px] max-w-[200px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  flex-col w-full sm:mx-2 md:mx-8 lg:mx-20 h-fit hover:drop-shadow-md drop-shadow !p-1 mb-4 3xl:p-![8px]">
          <div className="h-fit w-full">
            <div className="relative w-full">
              <img
                src={f.image}
                className="mb-3 max-h-32 w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
              <div className="mb-2">
                <Link href={`/movies/${f.rank}`}>
                  <p className="text-lg font-bold text-navy-700">
                    {f.title.slice(0, 15)}
                  </p>
                </Link>
                <span className="text-sm flex items-center">
                  Rating: {f.rating} <BsStarFill />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {searchValue && !f && (
            <div>
              <h1 className="text-red-600 px-4 py-5 flex justify-center">
                No search result fount
              </h1>
            </div>
          )}
          <div className="flex justify-center">
            <div className="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {currentPost.map((movie) => (
                <div key={movie.rank} className="!z-5 relative rounded-[20px] max-w-[200px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  flex-col w-full h-fit hover:drop-shadow-md drop-shadow !p-1 mb-4 3xl:p-![8px]">
                  <div className="h-fit w-full">
                    <div className="relative w-full">
                      <img
                        src={movie.image}
                        className="mb-3 max-h-32 w-full rounded-xl object-cover"
                        alt=""
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                      <div className="mb-2">
                        <Link href={`/movies/${movie.rank}`}>
                          <p className="text-lg font-bold text-navy-700">
                            {movie.title.slice(0, 15)}
                          </p>
                        </Link>
                        <span className="text-sm flex items-center">
                          Rating: {movie.rating} <BsStarFill />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Paginate
            postPerPage={postPerPage}
            totalPosts={movies.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}
