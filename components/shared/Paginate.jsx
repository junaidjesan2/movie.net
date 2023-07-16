import React, { useState } from "react";

export default function Paginate({ postPerPage, paginate, totalPosts }) {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick=(number)=>{
    setActivePage(number)
    paginate(number)
  }
  return (
    <div class="w-full md:w-2xl flex justify-center">
      <nav aria-label="">
        <ul class="flex flex-wrap -space-x-px">
          {pageNumbers.map((number) => (
            <li className="my-2">
              <a
                class={`${activePage===number?"bg-gray-300 border border-gray-400 text-gray-700 hover:bg-gray-900 drop-shadow-md hover:text-gray-200 leading-tight py-2 px-3 ":"bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 "}`}
                onClick={()=>{
                    handlePageClick(number)
                    paginate(number)
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
