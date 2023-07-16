"use client";
import axios from "axios";
import React from "react";
import Carousel from "../components/shared/Carousel";
import { Movies } from "../Movies";
import { BsStarFill } from "react-icons/bs";

export default function page() {
  // const g = Movies.filter(movie => parseFloat(movie.rating) >= 8.8)
  const sortMovies = Movies.sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
  );

  // const calculateAverageRating = (movies) => {
  //   let totalRating = 0;
  //   movies.forEach((movie) => {
  //     totalRating += parseFloat(movie.rating);
  //   });
  //   return (totalRating / movies.length).toFixed(1);
  // };

  const admin_email = "";

  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="bg-stone-600 py-2 md:py-4 lg:py-8 px-3 md:px-6 lg:px-12">
        <h1 className="text-base md:text-xl lg:text-2xl font-bold">Latest Movies</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortMovies.slice(0, 20).map((movie) => (
            <div className="!z-5 relative rounded-[20px] max-w-[200px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  flex-col w-full h-72 sm:h-fit !p-1 mb-4 3xl:p-![8px]">
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
                    <p className="text-lg font-bold text-navy-700">
                      {movie.title.slice(0, 15)}
                    </p>
                    <span className="text-sm flex items-center">
                      Rating: {movie.rating} <BsStarFill />
                    </span>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                      {movie.description.slice(0, 70)} ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
