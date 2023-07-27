"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa"

const FormSchema = Yup.object().shape({
  comment: Yup.string().min(5).max(23).required("Please enter your First Name"),
});

const initialValue = {
  comment: "",
};

export default function Modal({ openModal, setOpenModal ,admin_email}) {
  const router = useRouter();
  const [hoverValue, setHoverValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(undefined);
  const [comment,setComment]=useState({})

  const handleClick=(v)=>{
    setCurrentValue(v)
  }
  const handleMouseHover=(v)=>{
    setHoverValue(v)
  }
  const handleMouseLeave=(v)=>{
    setHoverValue(undefined)
  }

  
    const { values, errors, handleSubmit, handleChange } = useFormik({
      initialValues: initialValue,
      validationSchema: FormSchema,
      onSubmit: (values) => {
        console.log(admin_email)
        // if (values !=="") {
        //   window.confirm("are you sure?")
        //   router.replace('/movies')
        // }
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
                    {[...Array(5)].map((star, index) => {
                      return (
                        <FaStar
                        className={(hoverValue||currentValue)> index?`w-4 mr-2 text-orange-400`:`w-4 mr-2 text-slate-300`}
                        onClick={()=>handleClick(index+1)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="w-3/4 flex flex-col">
                  <button
                    onSubmit={() => handleSubmit()}
                    className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                  >
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
