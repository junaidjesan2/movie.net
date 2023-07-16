"use client";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../components/Redux/CartSlice";

export default function page() {
    const dispatch = useDispatch();
  const movies = useSelector((state) => state.cart);

  const handleRemove=(movie)=>{
    dispatch(remove(movie.rank))
  }
  return (
    <div className="min-h-screen">
      <div class="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg">
        <header class="border-b border-gray-100 px-5 py-4">
          <div class="font-semibold text-gray-800">Manage Carts</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="w-full table-auto">
            <thead class="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="text-left font-semibold">Movie Name</div>
                </th>
                <th class="p-2">
                  <div class="text-left font-semibold">Trailer link</div>
                </th>
                <th class="p-2">
                  <div class="text-center font-semibold">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-100 text-sm">
              {movies?.map((movie) => (
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="h-5 w-5" value="id-1" />
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{movie.title}</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium text-green-500">
                      <Link href={`/movie/${movie.rank}`}>Link</Link>
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="flex justify-center">
                      <button onClick={()=>handleRemove(movie)}>
                        <svg
                          class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
