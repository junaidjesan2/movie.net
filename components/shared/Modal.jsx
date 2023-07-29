"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

const FormSchema = Yup.object().shape({
  comment: Yup.string().min(5).max(23).required("Please enter your First Name"),
});

const initialValue = {
  comment: "",
};

export default function Modal({ openModal, setOpenModal, admin_email }) {
  const router = useRouter();
  const [hoverValue, setHoverValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(undefined);
  const [comment, setComment] = useState({});

  const handleClick = (v) => {
    setCurrentValue(v);
  };
  const handleMouseHover = (v) => {
    setHoverValue(v);
  };
  const handleMouseLeave = (v) => {
    setHoverValue(undefined);
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(admin_email);
      // if (values !=="") {
      //   window.confirm("are you sure?")
      //   router.replace('/movies')
      // }
    },
  });

  return (
    <div className="">
      {openModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Make rating</h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    X{" "}
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className="flex flex-col items-center py-4 space-y-2">
                      <span className="text-lg text-gray-800">
                        How was quality of the call?
                      </span>
                      <div className="flex space-x-3">
                        {[...Array(5)].map((star, index) => {
                          return (
                            <FaStar
                              className={
                                (hoverValue || currentValue) > index
                                  ? `w-4 mr-2 text-orange-400`
                                  : `w-4 mr-2 text-slate-300`
                              }
                              onClick={() => handleClick(index + 1)}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-3/4 flex flex-col">
                      <button
                        onSubmit={() => handleSubmit()}
                        className="py-2 px-4 my-3 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                      >
                        Rate now
                      </button>
                    </div>
                    {/* <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onSubmit={() => handleSubmit()}
                  >
                    Save Changes
                  </button>
                </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
