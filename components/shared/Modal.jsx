"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormSchema = Yup.object().shape({
  comment: Yup.string().min(5).max(23).required("Please enter your First Name"),
});

const initialValue = {
  comment: "",
};

export default function Modal({ openModal, setOpenModal }) {
  const [ratingValue, setRatingValue] = useState(0);
  const { values, errors, handleSubmit, handleChange} = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      alert("Successfully Commented")
      window.location.replace("http://localhost:3000/");
    },
  });

  return (
    <div>
      {openModal && (
        <div className="py-3 sm:mx-auto">
          <div className="absolute sm:w-full md:w-1/2 right-0 top-2/4 md:top-20 bg-white flex flex-col rounded-xl shadow-lg">
            <div className="px-12 py-4">
              <h2 className="text-gray-800 text-3xl font-semibold">
                Your opinion matters to us!
              </h2>
            </div>
            <form>
              <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-4 space-y-2">
                  <span className="text-lg text-gray-800">
                    How was quality of the call?
                  </span>
                  <div className="flex space-x-3">
                    <svg
                      className={`${
                        ratingValue === 1 || 2 || 3 || 4 || 5
                          ? "w-12 h-12 text-yellow-500"
                          : "text-gray-500 w-12 h-12"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setRatingValue(1)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className={`${
                        ratingValue === 2 || 3 || 4 || 5
                          ? "w-12 h-12 text-yellow-500"
                          : "text-gray-500 w-12 h-12"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setRatingValue(2)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className={`${
                        ratingValue === 3 || 4 || 5
                          ? "w-12 h-12 text-yellow-500"
                          : "text-gray-500 w-12 h-12"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setRatingValue(3)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className={`${
                        ratingValue === 4 || 5
                          ? "w-12 h-12 text-yellow-500"
                          : "text-gray-500 w-12 h-12"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setRatingValue(4)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className={`${
                        ratingValue === 5
                          ? "w-12 h-12 text-yellow-500"
                          : "text-gray-500 w-12 h-12"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setRatingValue(5)}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col">
                  <textarea
                    rows="3"
                    className="p-4 text-gray-500 rounded-xl resize-none"
                    name="comment"
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    Leave a message, if you want
                  </textarea>
                  {<div className="text-red-600">{errors.comment}</div>}
                  <button onSubmit={()=>handleSubmit()} className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
                    Rate now
                  </button>
                </div>
              </div>
              <div className="h-14 flex items-center justify-center">
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-gray-600"
                >
                  Maybe later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
